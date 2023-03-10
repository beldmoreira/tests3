import * as catsRepository from "../repositories/catsRepository";
import { TypeCatData } from "../types/CatsTypes";

export async function insert(createCatData: TypeCatData) {
  const existingCat = await catsRepository.findByName(createCatData.name);
  if (existingCat) {
    throw { type: "conflict" };
  }

  await catsRepository.createCat(createCatData);
}

export async function getCatById(id: number) {
  const cat = await catsRepository.findById(id);
  if (!cat) {
    throw { type: "not_found" };
  }

  return cat;
}

export async function deleteCat(id: number) {
  await getCatById(id);
  await catsRepository.deleteCat(id);
}

export async function findCats() {
  return catsRepository.findAll();
}
