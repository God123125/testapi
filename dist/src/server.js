"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const upload_route_1 = __importDefault(require("../routes/upload.route"));
// import movieRoute from "../routes/movie.route";
const hotel_route_1 = __importDefault(require("../routes/hotel.route"));
const roomType_route_1 = __importDefault(require("../routes/roomType.route"));
const room_route_1 = __importDefault(require("../routes/room.route"));
const customer_route_1 = __importDefault(require("../routes/customer.route"));
const booking_route_1 = __importDefault(require("../routes/booking.route"));
const check_in_route_1 = __importDefault(require("../routes/check-in.route"));
const checkOut_route_1 = __importDefault(require("../routes/checkOut.route"));
require("../db/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json("Hello from express + typescript");
});
app.use("/img", upload_route_1.default);
app.use("/hotels", hotel_route_1.default);
app.use("/roomTypes", roomType_route_1.default);
app.use("/rooms", room_route_1.default);
app.use("/customers", customer_route_1.default);
app.use("/bookings", booking_route_1.default);
app.use("/check-ins", check_in_route_1.default);
app.use("/check-outs", checkOut_route_1.default);
// app.use("/movie", movieRoute);
app.listen(PORT, () => {
    console.log("Server is running on port 3000!");
});
