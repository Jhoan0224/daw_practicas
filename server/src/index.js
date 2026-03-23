import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/users.js'


dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello")
});

app.use('/users', userRouter);



app.listen(process.env.PORT || 3000, () => {
    console.log(`server en el puerto localhost ${process.env.PORT || 3000}`);
});