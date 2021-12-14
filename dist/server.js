"use strict";var _app = require('./app');

const PORT = process.env.PORT || 8080

_app.app.listen(PORT, () => {
    console.log(`servidor ligado na porta ${PORT} e url localhost:${8080}`)
})