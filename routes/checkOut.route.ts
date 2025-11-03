import express from "express";
import checkOutController from "../controllers/checkOut.controller";
const router = express.Router();
router.get("/", checkOutController.get);
router.post("/", checkOutController.create);
router.patch("/:id", checkOutController.update);
router.delete("/:id", checkOutController.delete);
export default router;
