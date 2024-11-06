const app = require('../app')
const http = require("http");
const debug = require("debug")("booking/server");
const port =normalizePort(process.env.PORT || 4000);
const mongoose = require("mongoose");
app.set('port', port);

const server = http.createServer(app);
server.listen(port)
server.on('listening',onListening)


function normalizePort (port){
    const val = parseInt(port, 10);
    if(isNaN(val)) return port;
    if(val >=0) return val;
    return false;

}
function onListening (){
    const address = server.address();
    const bind = typeof address === 'string' ? address : address.port;
    debug(`listening on ${bind}`)

}

mongoose.connect('mongodb://127.0.0.1:27017/test');