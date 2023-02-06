import { Router } from "express";
import { deleteCat, getAllCats, getById } from "../controllers/catsController";

const catsRouter = Router();
catsRouter.get("/cats", getAllCats);
catsRouter.get("/cats/:id", getById);
catsRouter.delete("/cats/:id", deleteCat);

export default catsRouter;
