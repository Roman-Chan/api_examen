import {config} from "dotenv"
config();

export const MONGODB_URI = process.env.MONGODB_URI as string
export const port = process.env.PORT as string
