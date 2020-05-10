const io = require('socket.io-client');

const SocketEndpoint = 'http://192.168.100.67';

export const socket = io(SocketEndpoint, {
    transports: ['websocket'],
});
