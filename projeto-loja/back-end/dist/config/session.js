"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
const express_session_1 = __importDefault(require("express-session"));
exports.sessionOptions = (0, express_session_1.default)({
    secret: `segredoDaSessao$1s4asc%#`,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 10,
        httpOnly: true
    }
});
//# sourceMappingURL=session.js.map