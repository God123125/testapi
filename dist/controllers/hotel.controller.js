"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hotel_1 = __importDefault(require("../models/hotel"));
const hotelController = {
    create: async (req, res) => {
        try {
            const body = {
                name: req.body.name,
                status: req.body.status,
                address: req.body.address,
            };
            const hotel = new hotel_1.default(body);
            await hotel.save();
            res.json({
                message: "Hotel created successfully",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    get: async (req, res) => {
        try {
            const hotel = await hotel_1.default.find();
            res.json({
                list: hotel,
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
            await hotel_1.default.findByIdAndUpdate(id, body);
            res.json({
                message: "Hotel updated successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await hotel_1.default.findByIdAndDelete(id);
            res.json({
                message: "Hotel deleted successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
};
exports.default = hotelController;
