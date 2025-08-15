import {PrismaClient} from "@prisma/client"

export const prisma = new PrismaClient();

export async function connectDb() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully!");
    } catch (err) {
        console.error("Failed to connect to the database: ", err);
        process.exit(1);
    }
}

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});

process.on("SIGTERM", async () => {
    await prisma.$disconnect();
    process.exit(0);
});