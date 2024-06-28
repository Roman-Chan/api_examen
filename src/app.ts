import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import questions from './routes/questions.routes'

const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use(questions);

export default app;