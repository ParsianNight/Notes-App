const chalk = require('chalk')
const { Console } = require('console')
const fs = require('fs')
const getNotes = function () {
    console.log("Your notes ... ")
}

const addNotes = function(title,body){
    const notes = loadNotes()
    const dublicateNotes = notes.filter(function(note)  {
        return note.title === title
    })

    if(dublicateNotes.length == 0)
    {
    notes.push({
        title: title,
        body: body
    })
    console.log("New note was added")
    saveNotes(notes)
} else {
    console.log("You already entered a note with the same title")
}

}

const removeNotes = function(title){
    const Notes = loadNotes()
    console.log()
    const EditedNotes = Notes.filter(function(note){
        return note.title !== title
    })
  
    if(EditedNotes.length == Notes.length){
        console.log("No notes with that name")
    } else {
        saveNotes(EditedNotes)
        console.log("Note removed successfully")
    }
}  

const listNotes = () => {
    const Notes = loadNotes()
    Notes.forEach((note) => {
        console.log(chalk.red(note.title))

    });
        
    
}

const saveNotes = function(notes) {
    const dataSTRING = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',dataSTRING)
}


const loadNotes = function() {
    try {
    const dataBUFFER = fs.readFileSync('notes.json')
    const dataJSON = dataBUFFER.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNotes = function(name){
    try {
        const dataBUFFER = fs.readFileSync('Notes.json')
        const dataJSON = dataBUFFER.toString()
        const Note = JSON.parse(dataJSON).filter(function(note){
            return note.title == name
        })
        if (Note.length == 0) {
            console.log("Select an existing note")
        } else {
            console.log(Note[0].body)
        }
    } catch (e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes:listNotes,
    readNotes: readNotes
}