const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use(history())
app.use(serveStatic(path.join(__dirname + '/dist')))
app.listen(port)

console.log('server started', port)