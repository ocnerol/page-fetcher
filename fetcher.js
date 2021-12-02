/**
 * Logic
 * use process.argv to allow CLI input through terminal
 * send input to request.js
 * - in request.js, submit request and prepare to receive response 
 * - upon receiving the response, it should save the body of the file to a variable and return that variable
 * fetcher should receive the result of the function in request.js
 * - then send that result to a callback fn which recieves the result from resource (result from request.js) and write it to the file specified
 * - ---if no error, console.log `Downloaded and saved <file length> bytes to <destination path>`
 */

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2, 4);
const URL = args[0];
const pathToWrite = args[1];

request(URL, (error, response, body) => {

  // console.log(`error: ${error}`);
  // console.log('response: ', response && response.statusCode);
  // console.log('body: ', body);

  if (error) return error;

  fs.writeFile(pathToWrite, body, (error) => {
    if (error) return error;
    const fileLength = body.toString().length;
    console.log(`Downloaded and saved ${fileLength} bytes to ${pathToWrite}`); 
  });

});

