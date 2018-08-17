const express = require( 'express' );
const app = express();
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );

server.listen( 6677, () => {
	console.log( 'Servidor corriendo en http://localhost:6677' );
} );