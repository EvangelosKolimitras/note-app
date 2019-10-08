
const yargs = require( 'yargs' )

const {addNote , getNote} = require( './notes' )
// add, remove, read , delete

const data = {name : 'evangelos'}


yargs.command({
	command  : 'add' ,
	describe : 'Add a new command' ,
	builder  : {
		title : {
			describe     : 'Note\'s title' ,
			demandOption : true ,
			type         : 'string'
		} ,
		body : {
			describe : 'The note\'s body' ,
			require  : true ,
			type     : 'string'
		}
	} ,
	handler : function( argv ) { addNote( argv.title , argv.body ) }
})

yargs.command({
	command  : 'list' ,
	describe : 'List all commands' ,
	handler  : function() {

		const data = fs.readFileSync( 'data.json' , err => err )
		console.log([ ... JSON.parse( data ) ])

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