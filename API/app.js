const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs'); 
 
app.listen(80);
  
function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html'); 80
            } 
            res.writeHead(200);
            res.end(data);
        });
} 

 
let dataFirst = [ ]

function syncData(socket = null){
    if(socket === null) return;

    socket.emit('syncData', {
        data: dataFirst.reverse()
    });
}
io.on('connection', async (socket) => { 
    console.log("Conectado.")

    syncData(socket);
 
    socket.on('newPost', async(data) => {
        dataFirst.push(data);
        syncData(socket);
    }); 
});


