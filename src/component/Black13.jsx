// 54321
//  4321 
//   321
//    21
//     1
import React from 'react'

const Black13 = (numbers) => {
    let number = Number(numbers);
    let x = [];
    for (let i = 1; i <= number; i++) {
        let rowdata = "";
        for (let j = 1; j < i; j++) {
            rowdata = rowdata + "-";
        }
        for(let k=number-i+1; k>=1; k--){  //here i+1 is require because (row minus + 1 value)
            rowdata = rowdata + k;
        }
        x.push(rowdata);
    }
  return x;
}

export default Black13