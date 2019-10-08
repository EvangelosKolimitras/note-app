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
yargs.command({
	command  : 'list' ,
	describe : 'List all commands' ,
	handler  : function() {

		console.log( 'Listing all notes' )

	}
})
yargs.command({
	command  : 'read' ,
	describe : 'Read a note' ,
	handler  : function() {

		console.log( 'Reading a note' )

	}
})

console.log( yargs.argv )