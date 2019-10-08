const fs = require( 'fs' )
const chalk = require( 'chalk' )
const yargs = require( 'yargs' )

// add, remove, read , delete

yargs.command({
	command  : 'add' ,
	describe : 'Add a new command' ,
	builder  : {
		title : {
			describe     : 'Note title' ,
			demandOption : true ,
			type         : 'string'
		} ,
		body : {
			describe : 'The note\'s body' ,
			require  : true ,
			type     : 'string'
		}
	} ,
	handler : function( argv ) {

		console.log( `[ ${chalk.green( '✔' )} ] Note Title: ${chalk.blue.bold( argv.title )}` )
		console.log( `[ ${chalk.green( '✔' )} ] Note Body: ${chalk.blue.bold( argv.body )}` )

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
yargs.command({
	command  : 'delete' ,
	describe : 'Delete a note' ,
	handler  : function() {

		console.log( 'Deleting a note' )

	}
})

yargs.parse()