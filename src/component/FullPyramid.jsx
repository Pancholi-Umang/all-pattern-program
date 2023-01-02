//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const FullPyramid = (number) => {
    let x = [];
    for (let i = 1; i <= number; i++) {
        let rowdata = "";
        for (let j = 1; j <= number - i; j++) {
            rowdata = rowdata + "-";
        }
        for (let k = 1; k <= 2 * i - 1; k++) { 
            rowdata = rowdata + "*";
        }
        x.push(rowdata);
    }
    return x;
}
export default FullPyramid





// const FullPyramid = (number) => {
//     let x = [];
//     for (let i = 1; i <= number; i++) { // FullPyramid
//         // for(let i = number; i>=1;i-- ) {      //reverse pyramid
//         let rowdata = "";
//         for (let j = number; j > i; j--) {
//             rowdata = rowdata + "-";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             rowdata = rowdata + "*";
//         }
//         x.push(rowdata);
//     }
//     return x;
// }
// export default FullPyramid





    // const FullPyramid = (number) => {
    //     let x = [];
    //     for (let i = 1; i <= number; i++) {
    //         let rowdata = "";
    //         for (let j = i; j < number; j++) {     // j < number but you can take (j=i)
    //             rowdata = rowdata + "-";
    //         }
    //         for (let k = 1; k <= 2 * i - 1; k++) {     // k <= 2 * i - 1 && k=1 ===> both are work
    //             rowdata = rowdata + "*";
    //         }
    //         x.push(rowdata);
    //     }
    //     return x;
    // }
    // export default FullPyramid





// const FullPyramid = (number) => {
//     let x = [];
//     for(let i = 1; i <= number; i++) {
//     let rowdata = "";
//     for(let j = 1; j <= number - i; j++) {
//         rowdata = rowdata + "-" ;
//     }
//     for(let k = 0; k < 2 * i - 1; k++){
//         rowdata = rowdata + "*";
//     }
//     x.push(rowdata);
//   }
//   return x;
// }
// export default FullPyramid
