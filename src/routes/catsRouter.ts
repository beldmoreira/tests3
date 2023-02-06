import { Router } from "express";
import {
  createCat,
  deleteCat,
  getAllCats,
  getById,
} from "../controllers/catsController.js";

const catsRouter = Router();
catsRouter.post("/cats", createCat);
catsRouter.get("/cats", getAllCats);
catsRouter.get("/cats/:id", getById);
catsRouter.delete("/cats/:id", deleteCat);

export default catsRouter;
