// *
// **
// ***
// ****
// *****

const SimplePyramid = (number) => { 
  let x = [];
  for (let i = 1; i <= number; i++) {
    let rowdata = "";
    for (let j = 1 ; j <= i ; j++) { 
      rowdata = rowdata + "*";
    }
    x.push(rowdata); 
  }
  return x;
};

export default SimplePyramid;


// const SimplePyramid = (number) => { 
//   let x = [];
//   for (let i = number; i >= 1; i--) {
//     let rowdata = "";
//     for (let j = 1 ; j <= number-i ; j++) { 
//       rowdata = rowdata + "*";
//     }
//     x.push(rowdata); 
//   }
//   return x;
// };

// export default SimplePyramid;
 