
const chalk = require( 'chalk' )
const {loadNotes , saveNotes} = require( './utils' )

// Adds a note 
exports.addNote = ( title , body ) => {

	// Load the current data and parse them
	const notes = loadNotes()
	const dubNotes = notes.find( note => note.title === title )

	// Check for dublicate titles
	if( dubNotes ) {

		console.table( chalk.red.bold.underline( '[ ❌  ] Dublicate note title' ) )
		return

	}

	const data = {
		id : Math.floor( Math.random() * 1000000000 ) ,
		title ,
		body
	}
	notes.push( data )
	saveNotes( notes )
	console.table( chalk.green.bold( '[ ✔ ] Title added!' ) )

}

// Delete a note 
exports.deleteNote = title => {

	const notes = loadNotes()
	const notDeleted = notes.map( el => el ).filter( note => note.title !== title )

	if( notes.length !== notDeleted.length ) {

		console.table( chalk.green.bold( 'Note removed!' ) )
		saveNotes( notDeleted )
		return false

	}
	console.table( chalk.red.bold( 'Note dit not removed!' ) )

}

// List all notes 
exports.listNotes = () => console.table( loadNotes().map( el => el ).forEach( note => console.table( note ) ) )

// Read a note
exports.readNote = title => console.table( loadNotes().map( note => note ).find( note => note.title !== title ) )

