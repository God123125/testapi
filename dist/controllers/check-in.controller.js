"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_in_1 = __importDefault(require("../models/check-in"));
const room_1 = __importDefault(require("../models/room"));
const checkInController = {
    create: async (req, res) => {
        try {
            const { customer, room, remaining_pay } = req.body;
            const body = {
                customer: customer,
                room: room,
                remaining_pay: remaining_pay,
            };
            const checkIn = new check_in_1.default(body);
            await checkIn.save();
            const updateStatus = {
                status: "Stay Over",
            };
            await room_1.default.findByIdAndUpdate(room, updateStatus);
            res.json({
                message: "CheckIn created successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    get: async (req, res) => {
        try {
            const checkIn = await check_in_1.default.find().populate(["customer", "room"]);
            res.json({
                list: checkIn,
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
            await check_in_1.default.findByIdAndUpdate(id, body);
            res.json({
                message: "Check In updated successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await check_in_1.default.findByIdAndDelete(id);
            res.json({
                message: "Check In deleted successfully",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
};
exports.default = checkInController;
