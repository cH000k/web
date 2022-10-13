const fs = require('fs');
const folderName = process.argv[2] || 'Project';
const test = ["test"];

// Asynchronus
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALL BACK")
//     if (err) throw err;
// });

// Synchronus
fs.mkdirSync(folderName);

fs.writeFileSync(`${folderName}/index.html`, test[0]);
fs.writeFileSync(`${folderName}/app.js`, test[0]);
fs.writeFileSync(`${folderName}/styles.css`, test[0]);

