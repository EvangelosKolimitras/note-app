
const yargs = require( 'yargs' )

const {addNote , deleteNote , listNotes , readNote} = require( './notes' )
// add, remove, read , delete

const data = {name : 'evangelos'}

class Options {

	constructor( command , describe , builder ) {

	}


}


yargs.command({
	command  : 'add' ,
	describe : 'Add a new command' ,
	builder  : {
		title : {
			describe     : 'Note\'s title to be added' ,
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
	handler  : function() { listNotes() }
})

yargs.command({
	command  : 'read' ,
	describe : 'Read a note' ,
	builder  : {
		title : {
			describe     : 'Note\'s title to be read' ,
			demandOption : true ,
			type         : 'string'
		}
	} ,
	handler : function() { readNote() }
})
yargs.command({
	command  : 'delete' ,
	describe : 'Delete a note' ,
	builder  : {
		title : {
			describe     : 'Note\'s title to be deleted' ,
			demandOption : true ,
			type         : 'string'
		}
	} ,
	handler : function( argv ) { deleteNote( argv.title ) }
})

yargs.parse()