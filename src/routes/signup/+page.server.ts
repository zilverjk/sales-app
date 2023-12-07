import { fail } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { auth } from '../../lib/server/lucia';
import type { PageServerLoad } from './$types';
import prismaClient from '$lib/server/prisma';
import { DateTime } from 'luxon';

export const load: PageServerLoad = async () => {
	const getRoles = async () => {
		const roles = await prismaClient.role.findMany({
			select: {
				id: true,
				name: true,
			},
			where: {
				status: true,
			},
		});

		console.log(roles);

		if (!roles) {
			return [];
		}

		return roles;
	};

	return { roles: getRoles() };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { username, password, name, lastname, email, role, active } = Object.fromEntries(
			await request.formData(),
		) as Record<string, string>;

		const nowMillis = DateTime.now().toMillis();

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username,
					password,
				},
				attributes: {
					username,
					name,
					lastname,
					email,
					role,
					active,
					createdBy: 'owner',
					createdAt: nowMillis,
					updatedBy: 'owner',
					updatedAt: nowMillis,
				},
			});

			const session = await auth.createSession({ userId: user.userId, attributes: {} });

			locals.auth.setSession(session);
		} catch (error: any) {
			console.error(error);

			if (error.message === 'USER_TABLE_UNIQUE_CONSTRAINT_ERROR') {
				return fail(400, {
					message: 'Username already taken',
				});
			}

			return fail(500, {
				message: 'An unknown error occurred',
			});
		}
	},
};
