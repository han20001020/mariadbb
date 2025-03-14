"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsRoute = void 0;
const Route_1 = require("../abstract/Route");
const ReservationsController_1 = require("../controller/ReservationsController");
class ReservationsRoute extends Route_1.Route {
    constructor() {
        super();
        this.Contorller = new ReservationsController_1.ReservationsController();
        this.url = '/Reservations/';
        this.setRoutes();
    }
    setRoutes() {
        this.router.get(`${this.url}test`, (req, res) => {
            this.Contorller.test(req, res);
        });
    }
}
exports.ReservationsRoute = ReservationsRoute;
