import { Request, Response } from "express";
import { facilitiesSchema } from "../schemas/facilitiesSchema.js";
import { wrongSchemaError } from "../util/errorUtils.js";
import * as facilitiesService from "../services/facilitiesService.js";

export async function createFacility(req: Request, res: Response) {
  const validation = facilitiesSchema.validate(req.body);
  if (validation.error) {
    throw wrongSchemaError();
  }

  await facilitiesService.insert(req.body);

  res.sendStatus(201);
}

export async function getAllFacilities(req: Request, res: Response) {
  const facilities = await facilitiesService.findFacilities();
  res.send(facilities);
}
