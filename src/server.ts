import "reflect-metadata"
import express, { Request, Response, NextFunction, response } from 'express'
import mongoose from 'mongoose'
import { config as configDotEnv } from 'dotenv'
import "express-async-errors"

import { routes } from './routes'

configDotEnv()

mongoose.connect(
    process.env.URL_DB, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)
const app = express()

app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

export {
    app
}