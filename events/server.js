const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("RPC ACTIVE!")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("OMIT GAMING CODEZ RPC IS READY")});
}
module.exports = keepAlive