"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const csurf_1 = __importDefault(require("csurf"));
const validate_1 = require("./middlewares/validate");
const session_1 = require("./config/session");
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.database();
        this.routes();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
        this.express.use(session_1.sessionOptions);
        this.express.use((0, csurf_1.default)());
        this.express.use(validate_1.tokenValidate);
    }
    async database() {
        await mongoose_1.default.connect('mongodb://root:example@127.0.0.1:27017/api?authSource=admin').then(() => this.express.emit('Conectou')).catch((e) => console.log(e));
    }
    routes() {
        this.express.use(routes_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map