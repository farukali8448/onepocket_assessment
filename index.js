//Task 1: 
//Basic Node.js Server Create a simple Node.js server that listens on port 3000 and responds with
//"Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.

//======================ANSWER-1=========================

const express = require('express');// 1 - Import express.js 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');//2 - handle incomming requests here..
});

app.listen(port, () => { //3 - listen for any incoming requests on port 3000
  console.log(`Server listening on port ${port}`);
});




//   Task 2: 
// Data Manipulation Write a function in Node.js that takes an array of integers as input 
// and returns the sum of all the numbers.


//============================ANSWER-2==================

function sumOfArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array of integers.');
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
        sum += arr[i];
      } else {
        throw new Error('Array must contain only integers.');
      }
    }
  
    return sum;
  }
  
  const inputArray = [10, 20, 30, 40, 50];
  const result = sumOfArrayIntegers(inputArray);
  console.log(result); 
  // Output: 150


  
  // Task 3: 
  //      Asynchronous File Handling Create a Node.js script that reads a text file named "data.txt" 
  //    and counts the number of words in it. The script should print the total word count to the console.


//========================ANSWER-3============================

const fs = require('fs');//import fs core module 

function countWordsInFile(file) {
  fs.readFile(file, 'utf8', (err, data) => {
      // using asyncronous readFile method read the data from file
      // basically i am using 'utf-8' becoz my normal output come to buffer format that's why i am using 'utf-8' 
      if (err) {       
      console.error('Error reading the file:', err);
    } else {
      const words =data.trim().split(" ");
      //what data i am passing that data first accecpt, removing the white space ,split the words using split method
      const wordCount = words.length;
      //
      console.log(`Total word count in "${file}": ${wordCount}`);
    }
  });
}

countWordsInFile('data.txt');

  