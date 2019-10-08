
const chalk = require( 'chalk' )
const {loadNotes , saveNotes} = require( './utils' )

// Adds a note 
exports.addNote = ( title , body ) => {

	// Load the current data and parse them
	const notes = loadNotes()
	const dubNotes = notes.filter( note => note.title === title )

	// Check for dublicate titles
	if( dubNotes.length !== 0 ) {

		console.log( chalk.red.bold.underline( 'Error: Dublicate note title' ) )
		return

	}

	const data = {
		id : Math.floor( Math.random() * 1000000000 ) ,
		title ,
		body
	}
	notes.push( data )
	saveNotes( notes )

}

// Delete a note 
exports.deleteNote = title => {

	const notes = loadNotes().map( el => el ).filter( note => note.title !== title )
	saveNotes( notes )

}