import { LuciaError } from 'lucia';
import { auth } from '../../lib/server/lucia';
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { username, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			const key = await auth.useKey('username', username, password);

			const session = await auth.createSession({
				userId: key.userId,
				attributes: {
					username: key.userId,
					provider: key.providerId,
				},
			});

			locals.auth.setSession(session);
		} catch (error) {
			console.error(error);

			if (
				error instanceof LuciaError &&
				(error.message === 'AUTH_INVALID_KEY_ID' || error.message === 'AUTH_INVALID_PASSWORD')
			) {
				return fail(400, { message: 'Verifica que el usuario y/o password sean los correctos.' });
			}

			return fail(500, {
				message: 'No fue posible validar tus credenciales por un error en el servidor.',
			});
		}

		throw redirect(302, '/');
	},
};
