"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const express_1 = __importDefault(require("express"));
const Routers_1 = require("./Routers");
const log_1 = require("./middlewares/log");
const http = require('http');
const cors_1 = __importDefault(require("cors"));
const Mariadb_1 = require("./utils/Mariadb");
require('dotenv').config();
const app = (0, express_1.default)();
const server = http.createServer(app);
exports.DB = new Mariadb_1.Mariadb();
app.use((0, cors_1.default)({
    // "origin": "https://sec.ethci.app",
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200,
    "exposedHeaders": ['Content-Disposition']
}));
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/assets', express_1.default.static(process.env.assetsPath));
for (const route of Routers_1.router) {
    app.use(route.getRouter());
}
server.listen(process.env.SVPORT, () => {
    log_1.logger.info('listening on *:' + process.env.SVPORT);
});
