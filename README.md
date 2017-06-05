# [Premier Social](https://jakecrawford12.github.io/) 

Source code for Premier Social website.

## Contributing to this Website

To use the source files, you will need to have [NodeJS](https://nodejs.org/en/download/). To start working on the project, run the following commands:
* `$> git clone https://github.com/jakecrawford12/jakecrawford12.github.io.git`
* `$> cd jakecrawford12.github.io`
* `$> npm install`

## NPM Scripts in the package.json

The scripts in the package.json use gulp.js among other npm commands. The scripts to work on this project are as follows:
* `$> npm start`: opens the index.html file in a browser
* `$> npm run update`: updates third party dependencies such as bootstrap, jquery and font-awesome
* `$> npm run dev`: sets a watch on index.html, JS, and CSS files to automatically load changes into the browser
* `$> npm run prod`: transpiles the SCSS and minifies the CSS and JS
