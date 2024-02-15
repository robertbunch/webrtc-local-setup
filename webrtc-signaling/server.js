const fs = require('fs') //to load up our https certs
const https = require('https') //we need https ... for https
const express = require('express')
const app = express()
const socketio = require('socket.io')

//read in our certs
const key = fs.readFileSync('./certs/cert.key')
const cert = fs.readFileSync('./certs/cert.crt')

const secureExpressSever = https.createServer({key, cert},app)
secureExpressSever.listen(9000) 

const io = socketio(secureExpressSever,{
    cors:[
        //the domains that are allowed
        'localhost:3000',
        'localhost:3001'
    ],
    methods:[
        "GET",
        "POST",
    ]
})

//listen for the connection event to our socket server
io.on('connection',socket=>{
    console.log(socket.id, "has joined")
})
