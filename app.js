const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes');

// setting version 
yargs.version('1.0.1')


// setting commands
yargs.command({
    command: 'add',
    description: 'Add data to your file.',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
                },
        body: {
            describe: 'Note Body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title,argv.body)

    }
})

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder:{
        title: {
        describe: 'Note title',
        demandOption:true,
        type:'string'
            }
    },
    handler: function(argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    description: 'List all notes',
    handler: ()  =>
        notes.listNotes()
    
})

yargs.command({
    command: 'read',
    description:'Read a specific node',
    builder:{
        title: {
        describe: 'Note title',
        demandOption:true,
        type:'string'
            }
    },
    handler: function(argv) {
        notes.readNotes(argv.title)
    }
})


// parsing env
yargs.parse()
