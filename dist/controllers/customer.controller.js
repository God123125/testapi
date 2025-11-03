"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("../models/customer"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const customerController = {
    register: async (req, res) => {
        const { email, first_name, last_name, phone } = req.body;
        const salt = await bcrypt_1.default.genSalt();
        const hashpass = await bcrypt_1.default.hash(req.body.password, salt);
        const body = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            password: hashpass,
        };
        const customer = new customer_1.default(body);
        await customer.save();
        res.json({
            message: "Account created successfully!",
        });
    },
    get: async (req, res) => {
        try {
            const customer = await customer_1.default.find();
            res.json({
                list: customer,
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { email, first_name, last_name, phone } = req.body;
            const salt = await bcrypt_1.default.genSalt();
            const hashpass = await bcrypt_1.default.hash(req.body.password, salt);
            const body = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone,
                password: hashpass,
            };
            await customer_1.default.findByIdAndUpdate(id, body);
            res.json({
                message: "Customer updated successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await customer_1.default.findByIdAndDelete(id);
            res.json({
                message: "Customer deleted successfully!",
            });
        }
        catch (e) {
            console.log(e);
        }
    },
};
exports.default = customerController;
