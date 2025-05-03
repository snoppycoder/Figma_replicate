const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Array of users to insert
    await prisma.user.deleteMany();
    console.log('Deleted all existing users.');

    const users = [
        { age: 20, email: 'alice@example.com', password : 'password' },
        { age: 20, email: 'bob@example.com', password : 'password' },
        { age: 20, email: 'charlie@example.com', password : 'password'  },
    ];

    // Insert users into the database
    for (const user of users) {
        await prisma.user.create({
            data: user,
        });
        console.log(`Created user: ${user.email}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });