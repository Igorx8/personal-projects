"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
app_1.default.on('Conectou', () => app_1.default.listen(3055, () => console.log('Escutando na porta 3055')));
//# sourceMappingURL=server.js.map