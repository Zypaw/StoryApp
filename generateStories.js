// generateStories.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the directory where your markdown files are
const storiesDir = path.join(__dirname, 'public', 'stories');
// Define where you want to write the generated JSON file
const outputFilePath = path.join(__dirname, 'public', 'stories.json');

// Read all files in the stories directory
fs.readdir(storiesDir, (err, files) => {
  if (err) {
    console.error("Error reading the stories folder:", err);
    return;
  }

  // Filter for markdown files and map them to a metadata object
  const stories = files
    .filter(file => file.endsWith('.md'))
    .map(fileName => {
      const filePath = path.join(storiesDir, fileName);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      return {
        id: fileName.replace('.md', ''), // use file name (without extension) as id
        title: data.title || 'Untitled'
        // You can add other fields like `artist`, `album`, or custom metadata if needed.
      };
    });

  // Write the metadata array as JSON
  fs.writeFile(outputFilePath, JSON.stringify(stories, null, 2), (err) => {
    if (err) {
      console.error("Error writing the stories.json file:", err);
    } else {
      console.log(`Stories metadata generated at ${outputFilePath}`);
    }
  });
});
