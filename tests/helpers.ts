import { prisma } from "../src/config/database";

export async function cleanDb() {
  await prisma.cat.deleteMany({});
}
