import express from "express";
import customerController from "../controllers/customer.controller";
const router = express.Router();
router.get("/", customerController.get);
router.post("/", customerController.register);
router.patch("/:id", customerController.update);
router.delete("/:id", customerController.delete);
export default router;
