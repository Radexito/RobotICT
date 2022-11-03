import React from 'react';
import { Number } from './Number';

// Change default input values as needed.
const default_number_low = 1;
const default_number_high = 100;

/* 
  For each number between lower and higher number apply a filter that checks if number can be 
  divided by 5 & 3, 3 or 5, then inserts the corresponding word into object in numbers array.
*/
let numbers = [];
for(let i = default_number_low; i<default_number_high+1;i++){
  if ((i % 5 == 0) && (i % 3 == 0)) {
    word = "RobotICT";
  }else if (i % 3 == 0) {
    word = "Robot";
  }else if (i % 5 == 0) {
    word = "ICT";
  }else{
    word = "";
  }
  numbers.push({number: i, word: word})
}

// Main app template
export const App = () => (
  <div>
    <table>
      <tbody>
        <tr><th>Number</th><th>Word</th></tr>
      { numbers.map(number => <Number key={ number.number } number={ number }/>) }
      </tbody>
      
    </table>
  </div>
);
