const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('it work!')
    setTimeout(() => {
        throw Error('error happen')
    }, 3000);
})

app.listen(port)
