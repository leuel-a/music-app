"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var user_controller_1 = require("./controllers/user.controller");
var validateResource_1 = __importDefault(require("./middlewares/validateResource"));
var user_schema_1 = require("./schemas/user.schema");
var session_controller_1 = require("./controllers/session.controller");
var session_schema_1 = require("./schemas/session.schema");
var requireUser_1 = __importDefault(require("./middlewares/requireUser"));
var music_schema_1 = require("./schemas/music.schema");
var music_controller_1 = require("./controllers/music.controller");
function routes(app) {
    app.get('/status', function (req, res) {
        res.json({ dbConnection: mongoose_1.default.connection.readyState === 1 });
    });
    // User Routes
    app.post('/api/users', (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
    app.get('/api/users/musics', requireUser_1.default, music_controller_1.getSelfMusicHandler);
    app.post('/api/sessions', (0, validateResource_1.default)(session_schema_1.createSessionSchema), session_controller_1.createUserSessionHandler);
    app.get('/api/sessions', requireUser_1.default, session_controller_1.getUserSessionsHandler);
    app.delete('/api/sessions', requireUser_1.default, session_controller_1.deleteUserSessionHandler);
    // Music Routes
    app.post('/api/musics', [requireUser_1.default, (0, validateResource_1.default)(music_schema_1.createMusicSchema)], music_controller_1.createMusicHandler);
    app.get('/api/musics/', music_controller_1.getAllMusicHandler);
    app.put('/api/musics/:musicId', [requireUser_1.default, (0, validateResource_1.default)(music_schema_1.updateMusicSchema)], music_controller_1.updateMusicHandler);
    app.get('/api/musics/:musicId', [requireUser_1.default, (0, validateResource_1.default)(music_schema_1.getMusicSchema)], music_controller_1.getMusicHandler);
    app.delete('/api/musics/:musicId', [requireUser_1.default, (0, validateResource_1.default)(music_schema_1.deleteMusicSchema)], music_controller_1.deleteMusicHandler);
}
exports.default = routes;
