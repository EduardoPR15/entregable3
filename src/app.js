const express = require('express')
const db = require('./utils/database')

const port = 9000

const app = express()

db.authenticate()
    .then(()=>{
        console.log('conectado');
    })
    .catch((err)=>{
        console.log(err)
    })


    db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch((err) => {
        console.log(err)
    })

    app.get("/", (req, res) => {
        res.status(200).json({
            message: "Ok!",
        });
    });
    
    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
    