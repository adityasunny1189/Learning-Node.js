const yargs = require("yargs");
const chalk = require("chalk");

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        body: {
            describe: "this is body",
            demandOption: true,
            type: "string"
        },
        title: {
            describe: "Title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        console.log(chalk.green.bold("Title: " + argv.title));
        console.log(chalk.green.bold("Body: " + argv.body));
    }
})


yargs.command({
    command: "remove",
    describe: "To remove a note",
    handler: function() {
        console.log(chalk.red.bold("Removing a note"));
    }
})

yargs.command({
    command: "read",
    describe: "read a note",
    handler: function() {
        console.log(chalk.blue.inverse.bold("Reading a note"));
    }
})

yargs.command({
    command: "list",
    describe: "list all notes",
    handler: function() {
        console.log(chalk.yellow.bold.italic("Listing all notes"));
    }
})

yargs.parse();

