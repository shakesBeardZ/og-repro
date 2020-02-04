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
    server.get('/:id', getOgDataFromDB , (req, res) =>  app.render(req, res, '/pagewithdynamiclink', req.ogData))

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(process.env.PORT || 5000, (err) =>{
        if(err)
            throw err

        console.log(`server listening on 5000`);
    })
})


getOgDataFromDB = (req, res, next) =>{
   ogRandomData  = [
       {
           ogTigle: ' Title 1',
           ogImage: '/images/image1.png',
           ogDescription: 'random description number 1'
       },
       {
        ogTigle: ' Title 2',
        ogImage: '/images/image2.png',
        ogDescription: 'random description number 2'
    },
    {
        ogTigle: ' Title 3',
        ogImage: '/images/image3.png',
        ogDescription: 'random description number 3'
    },
    {
        ogTigle: ' Title 4',
        ogImage: '/images/image4.png',
        ogDescription: 'random description number 4'
    },
    {
        ogTigle: ' Title 5',
        ogImage: '/images/image5.png',
        ogDescription: 'random description number 5'
    },
    {
        ogTigle: ' Title 6',
        ogImage: '/images/image6.png',
        ogDescription: 'random description number 6'
    }
   ]

   const randomOg= ogRandomData[Math.floor(Math.random() * ogRandomData.length)]
   req.ogData  = randomOg;
   
   return next();
}