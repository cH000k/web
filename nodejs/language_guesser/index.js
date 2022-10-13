// Code to allow import and require within the same file
// NOTE: You need to include "type":"module" in package.json
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Include franc, langs, and colors packages
import { franc, francAll } from 'franc';
const langs = require('langs');
const colors = require('colors');

// Accepts input when app is executed
const input = process.argv[2];

// franc process the input and returns its best guess
const guess = franc(input.toString());

// Check if input has been determined
if (guess == 'und') {
    console.log("Could not match a language. Please try again with a larger sample".red)
} else {
    console.log(langs.where("2T", guess).name.green)
}


