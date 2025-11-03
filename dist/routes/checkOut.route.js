"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkOut_controller_1 = __importDefault(require("../controllers/checkOut.controller"));
const router = express_1.default.Router();
router.get("/", checkOut_controller_1.default.get);
router.post("/", checkOut_controller_1.default.create);
router.patch("/:id", checkOut_controller_1.default.update);
router.delete("/:id", checkOut_controller_1.default.delete);
exports.default = router;
