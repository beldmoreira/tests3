import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database";

export async function createCat() {
  return prisma.cat.create({
    data: {
      name: faker.name.firstName(),
      breed: faker.animal.cat(),
      friend: faker.datatype.boolean(),
    },
  });
}

export async function createTheSameCat() {
  return prisma.cat.create({
    data: {
      name: "Binho",
      breed: "Calico",
      friend: true,
    },
  });
}

export async function createManyCats() {
  let catsArray = [];
  for (let i = 0; i < 11; i++) {
    const cat = await prisma.cat.create({
      data: {
        name: faker.name.firstName(),
        breed: faker.animal.cat(),
        friend: faker.datatype.boolean(),
      },
    });
    catsArray.push(cat);
  }
  return catsArray;
}

export async function createCatsWithId() {
  const cat = await prisma.cat.create({
    data: {
      id: parseInt(faker.finance.amount(0, 5, 0)),
      name: faker.name.firstName(),
      breed: faker.animal.cat(),
      friend: faker.datatype.boolean(),
    },
  });
  return cat;
}
