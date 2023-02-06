import { prisma } from "../config/database";
import { TypeCatData } from "../types/CatsTypes";

export async function createCat(createCatData: TypeCatData) {
  await prisma.cat.create({
    data: createCatData,
  });
}

export async function findByName(name: string) {
  return prisma.cat.findFirst({ where: { name } });
}

export async function findById(id: number) {
  return prisma.cat.findUnique({
    where: { id },
  });
}

export async function deleteCat(id: number) {
  return prisma.cat.delete({ where: { id } });
}

export async function findAll() {
  return prisma.cat.findMany({
    orderBy: { id: "asc" },
  });
}
