"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.createSessionSchema = zod_1.default.object({
    body: zod_1.default.object({
        email: zod_1.default.string({
            required_error: 'Email is required',
        }).email(),
        password: zod_1.default.string({
            required_error: 'Password is required',
        }),
    }),
});
