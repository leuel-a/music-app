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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMusicHandler = exports.getAllMusicHandler = exports.getSelfMusicHandler = exports.getMusicHandler = exports.updateMusicHandler = exports.createMusicHandler = void 0;
var lodash_1 = require("lodash");
var music_service_1 = require("../services/music.service");
function createMusicHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, music;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = res.locals.user._id;
                    return [4 /*yield*/, (0, music_service_1.createMusic)(__assign(__assign({}, req.body), { user: userId }))];
                case 1:
                    music = _a.sent();
                    return [2 /*return*/, res.send((0, lodash_1.omit)(music.toJSON(), ['__v']))];
            }
        });
    });
}
exports.createMusicHandler = createMusicHandler;
function updateMusicHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, musicId, update, music, updateProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = res.locals.user._id;
                    musicId = req.params.musicId;
                    update = req.body;
                    return [4 /*yield*/, (0, music_service_1.findMusic)({ _id: musicId })];
                case 1:
                    music = _a.sent();
                    if (!music) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    if (String(music.user) !== userId) {
                        return [2 /*return*/, res.sendStatus(401)];
                    }
                    return [4 /*yield*/, (0, music_service_1.findAndUpdate)({ _id: musicId }, update, { new: true })];
                case 2:
                    updateProduct = _a.sent();
                    return [2 /*return*/, res.send(updateProduct)];
            }
        });
    });
}
exports.updateMusicHandler = updateMusicHandler;
function getMusicHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, musicId, music;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = res.locals.user._id;
                    musicId = req.params.musicId;
                    return [4 /*yield*/, (0, music_service_1.findMusic)({ _id: musicId })];
                case 1:
                    music = _a.sent();
                    if (!music) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    if (String(music.user) !== userId) {
                        return [2 /*return*/, res.sendStatus(401)];
                    }
                    return [2 /*return*/, res.send(music)];
            }
        });
    });
}
exports.getMusicHandler = getMusicHandler;
function getSelfMusicHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, userId, page, pageSize, password, __v, userWithoutPassword, musics;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = res.locals.user;
                    userId = user._id;
                    page = parseInt(req.query.page) || 1;
                    pageSize = parseInt(req.query.pageSize) || 8;
                    password = user.password, __v = user.__v, userWithoutPassword = __rest(user, ["password", "__v"]);
                    return [4 /*yield*/, (0, music_service_1.getAllMusic)(page, pageSize, userId)];
                case 1:
                    musics = _a.sent();
                    return [2 /*return*/, res.json(__assign(__assign({}, musics), { user: userWithoutPassword }))];
            }
        });
    });
}
exports.getSelfMusicHandler = getSelfMusicHandler;
function getAllMusicHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var page, pageSize, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = parseInt(req.query.page) || 1;
                    pageSize = parseInt(req.query.pageSize) || 8;
                    return [4 /*yield*/, (0, music_service_1.getAllMusic)(page, pageSize)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, res.send(result)];
            }
        });
    });
}
exports.getAllMusicHandler = getAllMusicHandler;
function deleteMusicHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, musicId, music;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = res.locals.user._id;
                    musicId = req.params.musicId;
                    return [4 /*yield*/, (0, music_service_1.findMusic)({ _id: musicId })];
                case 1:
                    music = _a.sent();
                    if (!music) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    if (String(music.user) !== userId) {
                        return [2 /*return*/, res.sendStatus(401)];
                    }
                    return [4 /*yield*/, (0, music_service_1.deleteMusic)({ _id: musicId })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(200)];
            }
        });
    });
}
exports.deleteMusicHandler = deleteMusicHandler;
