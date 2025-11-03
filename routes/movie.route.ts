import movieController from "../controllers/movie.controller";
import express from "express";
const router = express.Router();
router.post("/create", movieController.create);
router.get("/", movieController.get);
router.get("/:id", movieController.getById);
router.patch("/update/:id", movieController.update);
router.delete("/delete/:id", movieController.delete);
export default router;
