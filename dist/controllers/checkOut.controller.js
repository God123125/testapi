"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_1 = __importDefault(require("../models/checkout"));
const room_1 = __importDefault(require("../models/room"));
const checkOutController = {
    create: async (req, res) => {
        try {
            const { customer, room, remaining_pay } = req.body;
            const body = {
                customer: customer,
                room: room,
                remaining_pay: remaining_pay,
            };
            const checkOut = new checkout_1.default(body);
            await checkOut.save();
            const updateStatus = {
                status: "Checked Out",
            };
            await room_1.default.findByIdAndUpdate(room, updateStatus);
            res.json({
                message: "CheckOut created successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    get: async (req, res) => {
        try {
            const checkout = await checkout_1.default.find();
            res.json({
                list: checkout,
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
            await checkout_1.default.findByIdAndUpdate(id, body);
            res.json({
                message: "Check Out updated successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await checkout_1.default.findByIdAndDelete(id);
            res.json({
                message: "Check Out deleted successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
};
exports.default = checkOutController;
