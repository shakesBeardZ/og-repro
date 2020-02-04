const next = require('next')
const express = require('express')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler()

app.prepare().then(() => {
    server.get('/', (req, res) => app.render(req, res, '/'));

    server.get('/normalpage', (req, res) =>  app.render(req, res, '/normalpage'))

    // page with dynamic url
    server.get('/:id', (req, res) =>  app.render(req, res, '/pagewithdynamiclink'))

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(8080, (err) =>{
        if(err)
            throw err

        console.log(`server listening on 8080`);
    })
})