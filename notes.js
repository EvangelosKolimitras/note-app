const fs = require( 'fs' )
const chalk = require( 'chalk' )

// Adds a note 
exports.addNote = ( title , body ) => {

	// Load the current data and parse them
	const notes = loadNotes()
	const dubNotes = notes.filter( note => note.title === title )

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

	console.log( notes )

}
const saveNotes = notes => fs.writeFileSync( 'data.json' , JSON.stringify( notes ) )

const loadNotes = () => {

	try {

		return JSON.parse( fs.readFileSync( 'data.json' , err => err ) )

	} catch ( error ) {

		return []

	}

}