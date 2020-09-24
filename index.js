const cors = require('cors');
const { json } = require('body-parser');
const app = require('express')();
const { getFile } = require('./getFiles');
const PORT = 3000;

app.use(cors());
app.use(json());

app.get('/users', async (req, res) => {
    try {
        const file = await getFile('./users.json');
        res.end(file)
    } catch (err) {
        res.end(err)
    }
})

app.get('/auth', async (req, res) => {
    try {
        const file = await getFile('./auth.json');
        res.end(file);
    } catch (err) {
        res.end(err)
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
