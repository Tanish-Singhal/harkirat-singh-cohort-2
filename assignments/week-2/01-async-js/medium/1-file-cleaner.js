// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function removeExtraSpace(str) {
  return str.replace(/\s+/g, " ").trim();
}

function processFile(filename) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.error("Error: ", err);
      return;
    }

    const modifiedContent = removeExtraSpace(data);

    fs.writeFile(filename, modifiedContent, 'utf-8', (err) => {
      if (err) {
        console.error('Error: ', err);
        return;
      }
      console.log(`${filename} has been cleaned and saved.`);
    });
  });
}

processFile('example.txt');
