const path = require("path");
const fs = require("fs");

// load json files
const readDirectoryPath = path.join(__dirname, "public", "data");
const files = fs.readdirSync(readDirectoryPath);
const events = files.map((file) =>
  JSON.parse(
    fs.readFileSync(`${path.join(__dirname, "public", "data", file)}`, "utf8")
  )
);

// generate list file
const writeDirectoryPath = path.join(__dirname, "public", "events.json");
fs.writeFileSync(writeDirectoryPath, JSON.stringify(events));
