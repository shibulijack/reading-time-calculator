#!/usr/bin/env node
const program = require("commander");

program
  .version("1.2.0", "-v, --version", "CLI Version")
  .usage("-s [PATH]")
  .description(
    "Node CLI tool to generate the reading time for a Markdown file."
  )
  .option("-s, --sourceDir [directory]", "Specify the directory of JS files.")
  .arguments("<path>")
  .parse(process.argv);

const app = require("../index");
const options = {
  sourceDir: program.sourceDir
};

if (program.sourceDir) {
  app(options);
} else {
  program.help();
}
