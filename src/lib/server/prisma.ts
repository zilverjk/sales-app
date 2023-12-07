// import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client';

// const prismaClient = global.__prisma || new PrismaClient();
const prismaClient = new PrismaClient();

export default prismaClient;
