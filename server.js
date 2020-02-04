const next = require('next')
const express = require('express')
const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler()
const Xstone = require('./xstone')
const mongoose = require('mongoose');

const DB_URI = 'mongodb://a3b53cab3f28111e98ec116332d13ed2-2074414623.us-east-1.elb.amazonaws.com:27017/xamber'

mongoose.connect(DB_URI, { useNewUrlParser: true }).then(data => {
    console.log(`[!] INFO: succesuffully connected to mongoDB ${DB_URI}`);
}).catch(error => {
    console.log(`[X] ERROR in Connecting to mongoDB instance ${DB_URI}`);
    console.log(error);
})

app.prepare().then(() => {
    server.get('/', (req, res) => app.render(req, res, '/'));

    server.get('/normalpage', (req, res) =>  app.render(req, res, '/normalpage'))

    // page with dynamic url
    server.get('/:id', getOgDataFromDB , (req, res) =>  app.render(req, res, '/pagewithdynamiclink', req.ogData))

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(process.env.PORT || 8080, (err) =>{
        if(err)
            throw err

        console.log(`server listening on 8080`);
    })
})


getOgDataFromDB = async (req, res, next) =>{
    const {id} = req.params
    const xstone = await Xstone.findOne({  hashCode : id  , deleted: false })        
    req.ogData  = xstone.og ? xstone.og : null;
    setTimeout(() => {
        return next();
    }, 1000);
}