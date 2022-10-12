import { readFileSync, writeFileSync } from "fs";
import chalk from "chalk";


const readFile = () => {
    try {
        const dataBuffer = readFileSync("notes.json");
        const datajson = dataBuffer.toString();//buffer to string
        return JSON.parse(datajson);//string to object
    }
    catch
    {
        return [];
    }
}

// debugger used in debugging the code
//run code using node inspect file_name and then continue the inspection work in chrome://inspect 
//and it runs the command till the debugger

const saveNotes = (notes) => {
    writeFileSync("notes.json", JSON.stringify(notes));
    console.log(chalk.green("Saved Sucessfully!"));
}


const addNotes = (title, body) => {
    const notes = readFile();
    // const duplicates = notes.filter((note) => title === note.title);
    const duplicate = notes.find((note) => title === note.title);
    if (!duplicate) {
        notes.push({//for pushing object in array
            title: title,
            body: body
        });
        saveNotes(notes);
    } else {
        console.log(chalk.red("Title already taken !"));
    }
}


const deleteNote = (title) => {
    const notes = readFile();
    const duplicates = notes.filter((note) => title !== note.title);
    if (duplicates.length === notes.length) {
        console.log(chalk.bgRed("Title doesn't exist!"));
    }
    else {
        console.log(chalk.bgGreen("Deleted Note Sucessfully!"));
        saveNotes(duplicates);
    }
}


const listNotes = () => {
    const notes = readFile();
    if (notes.length === 0) {
        console.log(chalk.white("Nothing to Display!"));
    }
    else {
        console.log(chalk.bgYellow("Your Notes"))
        notes.forEach((note) => console.log(chalk.cyan(note.title)));
    }
}


const readNote = (title) => {
    const notes = readFile();
    const note = notes.find((note) => note.title === title);
    if (!note) {
        console.log(chalk.magenta("No Title Found!"));
    }
    else {
        console.log(chalk.blue(note.title));
        console.log(chalk.grey(note.body));
    }
}


export { addNotes, deleteNote, listNotes, readNote };