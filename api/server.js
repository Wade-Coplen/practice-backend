const express = require("express")

const cors = require("cors")

const helmet = require("helmet")

const modelsRouter = require('../data/models/models-router')

const server = express()

server.use(helmet())

server.use(cors())

server.use(express.json())

server.use('/models', modelsRouter)





module.exports = server;