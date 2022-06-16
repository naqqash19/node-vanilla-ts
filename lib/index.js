"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const PORT = 8080;
const app = (0, express_1.default)();
app.use('/api/v1', api_1.default);
app
    .listen(PORT)
    .on('listening', () => console.log(`Listening on port ${PORT}.`));
//# sourceMappingURL=index.js.map