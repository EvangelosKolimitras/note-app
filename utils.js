const fs = require( 'fs' )
exports.saveNotes = notes => fs.writeFileSync( 'data.json' , JSON.stringify( notes ) )

exports.loadNotes = () => {

	try {

		return JSON.parse( fs.readFileSync( 'data.json' , err => err ) )

	} catch ( error ) {

		return []

	}

}