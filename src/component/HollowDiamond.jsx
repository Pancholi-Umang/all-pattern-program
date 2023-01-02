//      *
//     *-*    
//    *---*   
//   *-----*  
//   *-----*  
//    *---*   
//     *-*    
//      *     

const HollowDiamond = (numbers) => {
  let x = [];
  let number = Number(numbers);
  for (let i = 1; i <= number; i++) {
    let rowdata = "";
    for (let j = 1; j <= number*2-1; j++) {
      if (i + j == number + 1 || j - i == number - 1) {
        rowdata = rowdata + "*";
      }
      else{
        rowdata = rowdata + "-";
      }
    }
    x.push(rowdata);
  }

  for (let i = 1; i <= number; i++) {
    let rowdata = "";
    for (let j = 1; j <= number*2-1 ; j++) {
      if (i + j == number * 2 || j - i == 0) {
        rowdata = rowdata + "*";
      }
      else{
        rowdata = rowdata + "-";
      }
    }
    x.push(rowdata);
  }
  return x;
};

export default HollowDiamond;

// const HollowDiamond = (number) => {
//     let x = [];
//     for (let i = 1; i <= number; i++) {
//         let rowdata = "";
//         for (let j = number; j > i; j--) {
//             rowdata = rowdata + "-";
//         }
//         // printing star
//         for (let k = 0; k < i * 2 - 1; k++) {
//           if (k === 0 || k === 2 * i - 2) {
//             rowdata = rowdata + "*";
//           }
//           else {
//             rowdata = rowdata + "-";
//           }
//         }
//         x.push(rowdata);
//       }

//       for (let i = 1; i <= number - 1; i++) {
//         let rowdata = "";
//         for (let j = 0; j < i; j++) {
//             rowdata = rowdata + "-";
//         }
//         // printing star
//         for (let k = (number - i) * 2 - 1; k >= 1; k--) {
//           if (k === 1 || k === (number - i) * 2 - 1) {
//             rowdata = rowdata + "*";
//           }
//           else {
//             rowdata = rowdata + "-";
//           }
//         }
//         x.push(rowdata);
//       }

//     return x;
// }

// export default HollowDiamond
