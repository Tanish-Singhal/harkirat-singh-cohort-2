// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const content = "Hello, everyone! This is the new content of the file.";

const filename = 'example.txt';

fs.writeFile(filename, content, 'utf8', (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('New Content: ', filename);
});
