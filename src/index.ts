import express from 'express'

const app = express()
const PORT = 4001

app.get('/hello', (req, res) => {
    res.json({
        success: true,
        message: "Hi, Server is running."
    })
})
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:4000");
    
})