const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // Receba e transmita os streams de vídeo aqui.
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
