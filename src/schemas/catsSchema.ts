import joi from "joi";
import { TypeCatData } from "../types/CatsTypes";

export const catSchema = joi.object<TypeCatData>({
  name: joi.string().required(),
  breed: joi.string().required(),
});
