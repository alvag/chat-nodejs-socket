let socket = io.connect( 'http://192.168.1.5:6677', { 'forceNew': true } );

socket.on( 'messages', ( data ) => {
	console.log( data );
	render( data );
} );

function render( data ) {
	let html = data.map( ( msg, index ) => {
		return `
			<div class="message">
				<strong>${msg.nick}</strong> dice:
				<p>${msg.text}</p>
			</div>
		`;
	} ).join( ' ' );

	let div_msgs = document.getElementById( 'mensajes' );
	div_msgs.innerHTML = html;

	div_msgs.scrollTop = div_msgs.scrollHeight;
}

function adMessage( e ) {
	let message = {
		nick: document.getElementById( 'nick' ).value,
		text: document.getElementById( 'text' ).value,
	};

	document.getElementById( 'nick' ).style.display = 'none';

	socket.emit( 'add-message', message );

	return false;
}