"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booking_1 = __importDefault(require("../models/booking"));
const room_1 = __importDefault(require("../models/room"));
const bookingController = {
    create: async (req, res) => {
        try {
            const { customer, booked_money, room } = req.body;
            const storeRoom = await room_1.default.findById(room).populate("type");
            const remaining = storeRoom.type.price - booked_money;
            const body = {
                customer: customer,
                booked_money: booked_money,
                room: room,
                remaining_amount: remaining,
            };
            const booking = new booking_1.default(body);
            await booking.save();
            const updateStatus = {
                status: "Booked",
            };
            await room_1.default.findByIdAndUpdate(room, updateStatus);
            res.json({
                message: "Booking created successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    get: async (req, res) => {
        try {
            const booking = await booking_1.default.find().populate("customer");
            res.json({
                list: booking,
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
            await booking_1.default.findByIdAndUpdate(id, body);
            res.json({
                message: "Booking updated successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await booking_1.default.findByIdAndDelete(id);
            res.json({
                message: "Booking delete successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
};
exports.default = bookingController;
