import express from 'express'

const app = express()
const PORT = 80

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hi, Server is running."
    })
})
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:80");
    
})