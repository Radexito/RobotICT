import React from 'react';

export const Number = ({ number }) => {
  if(number.word != ""){
    return <tr><td>{number.number}</td><td>{number.word}</td></tr>
  }else{
    return <tr><td>{number.number}</td><td></td></tr>
  }
};