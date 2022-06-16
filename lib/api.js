"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api = (0, express_1.Router)();
api.get('/', (_req, res) => {
    res.json({ message: 'Hello World!' });
});
exports.default = api;
//# sourceMappingURL=api.js.map