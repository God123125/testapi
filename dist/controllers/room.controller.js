"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = __importDefault(require("../models/room"));
const roomType_1 = __importDefault(require("../models/roomType"));
const roomController = {
    create: async (req, res) => {
        try {
            const body = {
                name: req.body.name,
                type: req.body.type,
                status: req.body.status,
            };
            const room_type = await roomType_1.default.findById(req.body.type);
            if (room_type) {
                room_type.total_room += 1;
                room_type.save();
            }
            const room = new room_1.default(body);
            await room.save();
            res.json({
                message: "Room created successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    get: async (req, res) => {
        try {
            const room = await room_1.default.find().populate("type");
            res.json({
                list: room,
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            await room_1.default.findByIdAndUpdate(id, body);
            res.json({
                message: "Room updated successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await room_1.default.findByIdAndDelete(id);
            res.json({
                message: "Room deleted successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
};
exports.default = roomController;
