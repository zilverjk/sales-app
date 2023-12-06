import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './login/$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (!session) {
		throw redirect(303, '/login');
	}

	return { user: session?.user };
};
