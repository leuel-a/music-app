const privateKey: string = `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCOo+yL7M3e1rFl
R/CqNTSp4V4/NDb2t7sRsjmj1xBeNVtykWkOdKz1sRFo9CjpvTcGN2SQ0HdexcGJ
uws1ZP0Yv/nhcp5SaMCKojhoxGeFc+ddZDUOwLN7pY8pDA2CWlJZ1K4v91XZd1es
N4C0XHP5DCslB2HAAAT61VSikJSoYhAPj8UhYU3M5/uyM/Np3Zq6Gqg418PTftKH
T2KM8zkmLQeRzbdAMb7kXzFPeERC1cEbeG0caG37CnELC2heTwtkR2GA5mNRIQIq
fEjmdTEM3NDh/V7oFAxont2xtxCiQ/RHVlu/SoYeEbVZm3s4aGcx5Tez6HLKS8qZ
Oc0yuVjZAgMBAAECggEAAMLfsYx5Ocn4BuQYJPRlPE3bWKeA7pai7TCADb+JUxNi
Uk1z29OkE6iXAPIioMK1fzc+9mXiaTNRedhxch7Amgf2P62CqkpsUqEUf3yi18u7
TZyKCvLc0llbFvs9PDearmeL6W4eu2sfYOgn6+59YPQfa9JrA2EMpcELM1XlsTNY
u/O53qJTdcDmTLh+5mb4SXnZ0PQKiA4gEMUvSRLOJB7FL2u0HY94zmcVsHqKTyDw
tQJ9yE33HL31+bEpnksx9Uw9Me5dlA9PnUBKOJCnfsVoLo8BxqBAtqwXO+2PxMKQ
M81v2Qd9FFBM5Y87WXBetGtOVn6wT/6zjEeOxBi3wQKBgQC+pVEcLI55B8HlWw/0
jivP+hb+/g35GUvjnq8XUAMMW1T/ouyABp4itn+QlIk16P+po6lFPY4T2VTFZEs2
XomrJPVtonO/MWPamTC4muEHqYb97tXzqGRicDFgSOZx/JWQGOxhCBFJCPi9OX2x
P/pxeQxFE4q28Nvs/nyJCDP2+QKBgQC/ib9uUdI2nEMktVibkguu+bzQWXOdpE8G
aFn8XUK6esKUsakDEChLNRcBfAA6sXzp8M1LhQHwNoRJpBaFeTp8nZj1BnpR1Ybc
3PB0xSyL491E+fglbuBF7lLXm9XIUOXdPAlAdXe9r0LnBvPzkRBZDkt+NXtV+URI
e7yvGeGI4QKBgQCsSMdg1581Ht6Jf16O2cAcJdyMOVi1SLf9DlUakzL+ArdwgXKK
S/CyXAwxwxmwP0xzqDP7H6J6q4dhDr6tdoegwziMCCfjmyWq0Y9m9IfxnbEhX6m3
lPCKyOrGIXsnfWRHoU5Uba75OoNWtVKyUKfpzcNZ1UwhAM8uf9hZGbGkOQKBgCic
BPlX4bDwao/y3wmE6nM7wduOy6OFvbeHEmUeRNKSyoSKMmJS36gqZmlLKCVJkklr
Y6t6VNHgTSXr41aDQHJBW7e/mtmU4xYaxeSMFYjHVBeWxBTzsBtDj07lXGsvM703
SGLhRPTznsSqxbhDbmrjTABDSJYO1npjubqKSzYhAoGANZ48OZ7EtdnO3nexlpcJ
MeecLzspAKW1KrgZE387Lv85p6SthXLhJFwZZdR+UsrkSB2HnGsL5g45QToWg+S6
HCFt6sD0I6eRvXQLWbhZP/k4Px8fiYQXu7Pw7d37TMmvdLcMtsWEFUJSdxfVwELp
2XW1lu8qE5nIwOjGTbtw2ic=
-----END PRIVATE KEY-----`;

const publicKey: string = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjqPsi+zN3taxZUfwqjU0
qeFePzQ29re7EbI5o9cQXjVbcpFpDnSs9bERaPQo6b03BjdkkNB3XsXBibsLNWT9
GL/54XKeUmjAiqI4aMRnhXPnXWQ1DsCze6WPKQwNglpSWdSuL/dV2XdXrDeAtFxz
+QwrJQdhwAAE+tVUopCUqGIQD4/FIWFNzOf7sjPzad2auhqoONfD037Sh09ijPM5
Ji0Hkc23QDG+5F8xT3hEQtXBG3htHGht+wpxCwtoXk8LZEdhgOZjUSECKnxI5nUx
DNzQ4f1e6BQMaJ7dsbcQokP0R1Zbv0qGHhG1WZt7OGhnMeU3s+hyykvKmTnNMrlY
2QIDAQAB
-----END PUBLIC KEY-----`;

export default {
  port: process.env.PORT,
  dbUri: process.env.MONGODB_URI,
  saltWorkFactor: 10,
  privateKey,
  publicKey,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
};