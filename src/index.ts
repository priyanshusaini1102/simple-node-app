import express from 'express'
import dotenv from 'dotenv'
dotenv.config();


const app = express()
const PORT = 4002

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hi, Server is running."
    })
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})