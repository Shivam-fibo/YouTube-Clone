import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
}))

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static())
app.use(express.cookieParser())

// routes import
import userRouter from './routes/user.routes.js'

// routed decalaretion

app.use("/api/v1/users", userRouter)

export {app}