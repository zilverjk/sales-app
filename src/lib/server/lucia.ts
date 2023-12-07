import { lucia } from 'lucia';
import { dev } from '$app/environment';
import { sveltekit } from 'lucia/middleware';
import { prisma } from '@lucia-auth/adapter-prisma';
import prismaClient from './prisma';
// const redisClient =
// 	process.env.NODE_ENV === process.env.DEV_ENV
// 		? new Redis()
// 		: new Redis(process.env.KV_REDIS_URL as string);

export const auth = lucia({
	// adapter: {
	// 	session: ioredis(redisClient),
	// 	user: {}
	//  },
	adapter: prisma(prismaClient),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes: (user: any) => ({
		userId: user.userId,
		username: user.username,
		name: user.name,
	}),
	getSessionAttributes: (session: any) => ({
		sessionId: session.sessionId,
		userId: session.userId,
	}),
});

export type Auth = typeof auth;
