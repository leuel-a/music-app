"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var privateKey = "\n-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCOo+yL7M3e1rFl\nR/CqNTSp4V4/NDb2t7sRsjmj1xBeNVtykWkOdKz1sRFo9CjpvTcGN2SQ0HdexcGJ\nuws1ZP0Yv/nhcp5SaMCKojhoxGeFc+ddZDUOwLN7pY8pDA2CWlJZ1K4v91XZd1es\nN4C0XHP5DCslB2HAAAT61VSikJSoYhAPj8UhYU3M5/uyM/Np3Zq6Gqg418PTftKH\nT2KM8zkmLQeRzbdAMb7kXzFPeERC1cEbeG0caG37CnELC2heTwtkR2GA5mNRIQIq\nfEjmdTEM3NDh/V7oFAxont2xtxCiQ/RHVlu/SoYeEbVZm3s4aGcx5Tez6HLKS8qZ\nOc0yuVjZAgMBAAECggEAAMLfsYx5Ocn4BuQYJPRlPE3bWKeA7pai7TCADb+JUxNi\nUk1z29OkE6iXAPIioMK1fzc+9mXiaTNRedhxch7Amgf2P62CqkpsUqEUf3yi18u7\nTZyKCvLc0llbFvs9PDearmeL6W4eu2sfYOgn6+59YPQfa9JrA2EMpcELM1XlsTNY\nu/O53qJTdcDmTLh+5mb4SXnZ0PQKiA4gEMUvSRLOJB7FL2u0HY94zmcVsHqKTyDw\ntQJ9yE33HL31+bEpnksx9Uw9Me5dlA9PnUBKOJCnfsVoLo8BxqBAtqwXO+2PxMKQ\nM81v2Qd9FFBM5Y87WXBetGtOVn6wT/6zjEeOxBi3wQKBgQC+pVEcLI55B8HlWw/0\njivP+hb+/g35GUvjnq8XUAMMW1T/ouyABp4itn+QlIk16P+po6lFPY4T2VTFZEs2\nXomrJPVtonO/MWPamTC4muEHqYb97tXzqGRicDFgSOZx/JWQGOxhCBFJCPi9OX2x\nP/pxeQxFE4q28Nvs/nyJCDP2+QKBgQC/ib9uUdI2nEMktVibkguu+bzQWXOdpE8G\naFn8XUK6esKUsakDEChLNRcBfAA6sXzp8M1LhQHwNoRJpBaFeTp8nZj1BnpR1Ybc\n3PB0xSyL491E+fglbuBF7lLXm9XIUOXdPAlAdXe9r0LnBvPzkRBZDkt+NXtV+URI\ne7yvGeGI4QKBgQCsSMdg1581Ht6Jf16O2cAcJdyMOVi1SLf9DlUakzL+ArdwgXKK\nS/CyXAwxwxmwP0xzqDP7H6J6q4dhDr6tdoegwziMCCfjmyWq0Y9m9IfxnbEhX6m3\nlPCKyOrGIXsnfWRHoU5Uba75OoNWtVKyUKfpzcNZ1UwhAM8uf9hZGbGkOQKBgCic\nBPlX4bDwao/y3wmE6nM7wduOy6OFvbeHEmUeRNKSyoSKMmJS36gqZmlLKCVJkklr\nY6t6VNHgTSXr41aDQHJBW7e/mtmU4xYaxeSMFYjHVBeWxBTzsBtDj07lXGsvM703\nSGLhRPTznsSqxbhDbmrjTABDSJYO1npjubqKSzYhAoGANZ48OZ7EtdnO3nexlpcJ\nMeecLzspAKW1KrgZE387Lv85p6SthXLhJFwZZdR+UsrkSB2HnGsL5g45QToWg+S6\nHCFt6sD0I6eRvXQLWbhZP/k4Px8fiYQXu7Pw7d37TMmvdLcMtsWEFUJSdxfVwELp\n2XW1lu8qE5nIwOjGTbtw2ic=\n-----END PRIVATE KEY-----";
var publicKey = "\n-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjqPsi+zN3taxZUfwqjU0\nqeFePzQ29re7EbI5o9cQXjVbcpFpDnSs9bERaPQo6b03BjdkkNB3XsXBibsLNWT9\nGL/54XKeUmjAiqI4aMRnhXPnXWQ1DsCze6WPKQwNglpSWdSuL/dV2XdXrDeAtFxz\n+QwrJQdhwAAE+tVUopCUqGIQD4/FIWFNzOf7sjPzad2auhqoONfD037Sh09ijPM5\nJi0Hkc23QDG+5F8xT3hEQtXBG3htHGht+wpxCwtoXk8LZEdhgOZjUSECKnxI5nUx\nDNzQ4f1e6BQMaJ7dsbcQokP0R1Zbv0qGHhG1WZt7OGhnMeU3s+hyykvKmTnNMrlY\n2QIDAQAB\n-----END PUBLIC KEY-----";
exports.default = {
    port: process.env.PORT,
    dbUri: process.env.MONGODB_URI,
    saltWorkFactor: 10,
    privateKey: privateKey,
    publicKey: publicKey,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
};
