// 1
// 12
// 123
// 1234


const SimplePyramidNum = (number) => {
  let x = [];
  let value = 1;
  for (let i = number; i >= 1; i--) {
    let rowdata = "";

    for(let j=1;j<=value;j++){
      rowdata = rowdata + j;
    }
    value++;
    x.push(rowdata);
  }
  return x; 
};

export default SimplePyramidNum;



// const SimplePyramidNum = (number) => {
//   let x = [];
//   let value = 1;
//   for (let i = number; i >= 1; i--) {
//     let rowdata = "";

//     for(let j=1;j<=value;j++){
//       rowdata = rowdata + j;
//     }
//     value++;
//     x.push(rowdata);
//   }
//   return x;
// };

// export default SimplePyramidNum;



// const SimplePyramidNum = (number) => {
//     let x = [];
//     for (let i = number; i >= 1; i--) {
//       let rowdata = "";
//       for (let j = 1; j <= number-i+1; j++) {
//           rowdata = rowdata + j;
//       }
//       x.push(rowdata);
//       console.log(i)
//     }
//     return x;
//   };
  
  // export default SimplePyramidNum;
  


  // const SimplePyramidNum = (number) => {
  //   let x = [];
  //   for (let i = 1; i <= number; i++) {
  //     let rowdata = "";
  //     for (let j = 1; j <= i; j++) {
  //         rowdata = rowdata + j;
  //     }
  //     x.push(rowdata);
  //   }
  //   return x;
  // };
  
  // export default SimplePyramidNum;
  