const fs = require( 'fs' )
const chalk = require( 'chalk' )
const yargs = require( 'yargs' )

// add, remove, read , delete

yargs.command({
	command  : 'add' ,
	describe : 'Add a new command' ,
	handler  : function() {

		console.log( 'Adding a new note' )

	}
})

console.log( yargs.argv )