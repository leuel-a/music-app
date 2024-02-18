"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.createUserSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string({
            required_error: 'Name is required',
        }),
        email: zod_1.default.string({
            required_error: 'Email is required',
        }).email('Invalid email format'),
        password: zod_1.default.string({
            required_error: 'Password is required',
        }).min(6, 'Password must be at least 6 characters'),
        confirmPassword: zod_1.default.string({
            required_error: 'Confirm Password is required',
        }),
    }).refine(function (data) { return data.password === data.confirmPassword; }, {
        message: 'Passwords don\'t match',
        path: ['confirmPassword'],
    }),
});
