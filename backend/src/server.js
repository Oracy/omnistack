const app = require('./app')

app.listen(port = 3333, () => {
    console.log(`
        ################################################
            🛡️  Server listening on port: ${port}   🛡️
        ################################################
    `)
})
