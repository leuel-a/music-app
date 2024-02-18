"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMusicSchema = exports.deleteMusicSchema = exports.updateMusicSchema = exports.createMusicSchema = void 0;
var zod_1 = __importDefault(require("zod"));
var payload = {
    body: zod_1.default.object({
        title: zod_1.default.string({
            required_error: 'Title is required',
        }).max(100, 'Must be 100 characters or less'),
        artist: zod_1.default.string({
            required_error: 'Artist is required',
        }),
        genre: zod_1.default.string({
            required_error: 'Genre is required',
        }),
        length: zod_1.default.number({
            required_error: 'Length is required',
        }),
        imageUrl: zod_1.default.string().url('Must be a valid URL').optional(),
    }),
};
var params = {
    params: zod_1.default.object({
        musicId: zod_1.default.string({
            required_error: 'musicId is required',
        }),
    }),
};
exports.createMusicSchema = zod_1.default.object(__assign({}, payload));
exports.updateMusicSchema = zod_1.default.object(__assign(__assign({}, payload), params));
exports.deleteMusicSchema = zod_1.default.object(__assign({}, params));
exports.getMusicSchema = zod_1.default.object(__assign({}, params));
