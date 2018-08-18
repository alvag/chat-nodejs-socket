const express = require( 'express' );
const app = express();
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );

app.use( express.static( 'client' ) );

let messages = [
	{
		id: 1,
		text: 'Bienvenido .....',
		nick: 'Bot 1'
	}
];

io.on( 'connection', ( socket ) => {
	console.log( `Nueva conexión desde la IP ${socket.handshake.address}` );

	socket.emit( 'messages', messages );

	socket.on( 'add-message', ( message ) => {
		messages.push( message );
		io.sockets.emit( 'messages', messages );
	} );
} );

server.listen( 6677, () => {
	console.log( 'Servidor corriendo en http://localhost:6677' );
} );