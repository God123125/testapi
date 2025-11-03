"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const room_controller_1 = __importDefault(require("../controllers/room.controller"));
const router = express_1.default.Router();
router.get("/", room_controller_1.default.get);
router.post("/", room_controller_1.default.create);
router.patch("/:id", room_controller_1.default.update);
router.delete("/:id", room_controller_1.default.delete);
exports.default = router;
