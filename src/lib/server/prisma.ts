import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client';

const prismaClient = global.__prisma || new PrismaClient();

if (env.NODE_ENV === 'development') {
	global.__prisma = prismaClient;
}

export default prismaClient;
