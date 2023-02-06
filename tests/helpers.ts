import { prisma } from "../src/config/database";

export async function cleanDb() {
  await prisma.$transaction([prisma.$executeRaw`TRUNCATE TABLE cats`]);
}
