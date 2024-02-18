"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireUser = function (req, res, next) {
    var user = res.locals.user;
    if (!user)
        return res.status(403).json({ message: 'Unauthorized' });
    return next();
};
exports.default = requireUser;
