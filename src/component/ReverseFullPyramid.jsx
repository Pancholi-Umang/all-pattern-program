//   *
//  ***
// *****

const  ReverseFullPyramid = (number) => {
    //inverted Full pyramid
    let x = [];
    for(let i = 1; i <= number; i++) { // FullPyramid
    // for(let i = number; i>=1;i-- ) {      //reverse pyramid
    let rowdata = "";
    for(let j = number; j > i; j--) {
        rowdata = rowdata + "-" ;
    }
    for(let k = 1; k <= 2*i-1; k++){
        rowdata = rowdata + "*";
    }
    x.push(rowdata); 
  }
  return x;
}  

export default ReverseFullPyramid 



// const  ReverseFullPyramid = (number) => {
//     //inverted Full pyramid
//     let x = [];
//     for(let i = 0; i < number; i++) {
//     let rowdata = "";
//     for(let j = 0; j < i; j++) {
//         rowdata = rowdata + "-" ;
//     }
//     for(let k = 0; k < 2 * (number-i) - 1; k++){
//         rowdata = rowdata + "*";
//     }
//     x.push(rowdata);
//   }
//   return x;
// }

// export default ReverseFullPyramid   



// const ReverseFullPyramid = (numbers) => {
//     let x = [];
//     for (let i = number; i <= 1; i--) {
//         let rowdata = "";
//         for (let j = 1; j <= number - i; j++) {
//             rowdata = rowdata + "-";

//         }
//         for (let j = 1; j <= i * 2 - 1; j++) {
//             rowdata = rowdata + "*";
//         }

//         x.push(rowdata);
//     }
//     return x;
// }
 
// export default ReverseFullPyramid

