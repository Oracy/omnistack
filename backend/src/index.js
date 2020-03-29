const express = require('express')
const cors = require('cors')
const app = express()
const { errors } = require('celebrate')

const routes = require('./routes/routes')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(port = 3333, () => {
    console.log(`
        ################################################
            🛡️  Server listening on port: ${port}   🛡️
        ################################################
    `)
})
