let socket = io.connect( 'http://192.168.1.5:6677', { 'forceNew': true } );

socket.on( 'messages', ( data ) => {
	console.log( data );
	render(data);
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

	document.getElementById( 'mensajes' ).innerHTML = html;
}