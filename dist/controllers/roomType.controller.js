"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roomType_1 = __importDefault(require("../models/roomType"));
const roomTypeController = {
    create: async (req, res) => {
        try {
            const body = {
                name: req.body.name,
                image: req.body.image,
                hotel: req.body.hotel,
                status: req.body.status,
                price: req.body.price,
            };
            const roomType = new roomType_1.default(body);
            await roomType.save();
            res.status(200).json({
                message: "Room Type created successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    get: async (req, res) => {
        try {
            const roomType = await roomType_1.default.find().populate([
                "hotel",
                {
                    path: "image",
                    select: "-data",
                },
            ]);
            res.json({
                list: roomType,
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
            await roomType_1.default.findByIdAndUpdate(id, body);
            res.json({
                message: "Room Type updated successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await roomType_1.default.findByIdAndDelete(id);
            res.json({
                message: "Room Type deleted successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
};
exports.default = roomTypeController;
