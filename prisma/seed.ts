import { PrismaClient } from '@prisma/client';
import { DateTime } from 'luxon';

const prisma = new PrismaClient();

async function main() {
	const dt = DateTime.now();

	const user = await prisma.user.upsert({
		where: { username: 'OWNER' },
		update: {
			updatedAt: dt.toMillis(),
			updatedBy: 'OWNER'
		},
		create: {
			username: 'OWNER',
			name: 'APP',
			lastname: 'OWNER',
			password: '$2y$10$FJPEWzp015mngpEe7.tR6ep8R/amoayRoIrX2Z9SN75wERN49fxcy',
			role: {
				create: {
					name: 'OWNER',
					permissions: {
						modules: [
							{
								name: 'users',
								create: true,
								upadate: true,
								delete: true,
								read: true
							},
							{
								name: 'roles',
								create: true,
								upadate: true,
								delete: true,
								read: true
							},
							{
								name: 'quotaions',
								create: true,
								upadate: true,
								delete: true,
								read: true
							}
						]
					},
					createdBy: 'OWNER',
					createdAt: dt.toMillis(),
					updatedBy: 'OWNER',
					updatedAt: dt.toMillis()
				}
			},
			createdBy: 'OWNER',
			createdAt: dt.toMillis(),
			updatedBy: 'OWNER',
			updatedAt: dt.toMillis()
		}
	});

	console.log({ user });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
