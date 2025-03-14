"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsController = void 0;
const Contorller_1 = require("../abstract/Contorller");
const PageService_1 = require("../Service/PageService");
const app_1 = require("../app");
require('dotenv').config();
class ReservationsController extends Contorller_1.Contorller {
    constructor() {
        super();
        this.service = new PageService_1.PageService();
    }
    test(Request, Response) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = app_1.DB.connection) === null || _a === void 0 ? void 0 : _a.query("USE lab_b310;"));
            const resp = yield ((_b = app_1.DB.connection) === null || _b === void 0 ? void 0 : _b.query("SELECT * FROM Reservations;"));
            Response.send(resp);
        });
    }
}
exports.ReservationsController = ReservationsController;
