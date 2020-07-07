var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './dist',
    port: 8000
})

server.start(()=>{
    console.log("Server has started at port ", server.port)
})