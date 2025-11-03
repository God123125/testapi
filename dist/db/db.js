"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb+srv://test:test123@cluster1.6lpgf3q.mongodb.net/movie_show")
    .then((res) => {
    console.log("connect success!");
})
    .catch((e) => {
    console.log("Error: ", e);
});
