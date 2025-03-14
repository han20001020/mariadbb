"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const pageRoute_1 = require("./routers/pageRoute");
const ReservationsRoute_1 = require("./routers/ReservationsRoute");
exports.router = [
    new pageRoute_1.PageRoute(), new ReservationsRoute_1.ReservationsRoute()
];
