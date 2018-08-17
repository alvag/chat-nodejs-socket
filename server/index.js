const express = require( 'express' );
const app = express();
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );

app.use( express.static( 'client' ) );

io.on( 'connection', ( socket ) => {
	console.log( `Nueva conexión desde la IP ${socket.handshake.address}` );
} );

server.listen( 6677, () => {
	console.log( 'Servidor corriendo en http://localhost:6677' );
} );