import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNotes, deleteNote, listNotes, readNote } from "./notes.js";
const yarg = yargs(hideBin(process.argv));

yarg.command({
    command: "add",
    describe: "For adding note",
    builder: {
        title: {
            describe: "Adding Title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "for adding body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        addNotes(argv.title, argv.body);
    }
});
yarg.command({
    command: "delete",
    describe: "for removing list",
    builder: {
        title: {
            describe: "Title to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        deleteNote(argv.title);
    }
});
yarg.command({
    command: "listnotes",
    describe: "for listing the lists",
    handler() { listNotes(); }
});
yarg.command({
    command: "readnote",
    describe: "for showing desired note",
    builder: {
        title: {
            describe: "note to be displayed",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        readNote(argv.title);
    }
});
yarg.parse();