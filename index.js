import App from "./app.js";
import { config } from "dotenv";
import referralRoute from './routes/referral.route.js'
import validateEnv from "./utils/validateEnv.js";

validateEnv()
config()

const port = process.env.PORT || 8888

const app = new App([referralRoute], port)

app.listen()