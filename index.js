const readingTime = require('reading-time');
const fs = require('fs');
const colors = require("colors");
const parseMD = require('parse-md').default

const parseFile = (options) => {
  const { sourceDir } = options;
  console.log(`Parsing file: ${sourceDir}`.yellow);
  const startTime = process.hrtime();
  const source = fs.readFileSync(sourceDir, 'utf8');
  const { metadata, content } = parseMD(source);
  console.log(`${JSON.stringify(metadata, null, 2)}`.grey);
  const stats = readingTime(content);
  const endTime = process.hrtime(startTime);
  const timeElapsed = (endTime[0] + endTime[1] / 1e9).toFixed(2);
  console.log(`\nTime elapsed: ${timeElapsed} seconds`);
  console.log(`\nReading time:`.green);
  console.log(stats);
}

module.exports = parseFile;