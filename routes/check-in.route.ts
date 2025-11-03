import express from "express";
import checkInController from "../controllers/check-in.controller";
const router = express.Router();
router.get("/", checkInController.get);
router.post("/", checkInController.create);
router.patch("/:id", checkInController.update);
router.delete("/:id", checkInController.delete);
export default router;
