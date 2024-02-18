"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateResource = function (schema) { return function (req, res, next) {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    }
    catch (err) {
        return res.status(400).send(err.errors);
    }
}; };
exports.default = validateResource;
