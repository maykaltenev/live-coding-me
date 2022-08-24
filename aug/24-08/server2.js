import express from 'express'

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send('hellooooo')
})
app.get('/data', (req, res) => {
    res.send('hellooooo')
})