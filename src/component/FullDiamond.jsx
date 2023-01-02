//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *


const FullDiamond = (number) => {
    let x = [];
    for (let i = 1; i <= number; i++) { // FullPyramid
        // for(let i = number; i>=1;i-- ) {      //reverse pyramid
        let rowdata = "";
        for (let j = number; j > i; j--) {
            rowdata = rowdata + "-";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {     // k=0 k <= ni jagya par < print karavanu
            rowdata = rowdata + "*";
        }
        x.push(rowdata);
    }
        //i=number-1 pan lakhi shaku atle 2ni jagya par last line ekj var print thay
        for(let i = number; i>=1;i-- ) {      //reverse pyramid
        let rowdata = "";
        for (let j = number; j > i; j--) {
            rowdata = rowdata + "-";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            rowdata = rowdata + "*";
        }
        x.push(rowdata);
    }
    return x;
}
export default FullDiamond

// const FullDiamond = (number) => {
//     let x = [];
//     for (let i = 1; i <= number; i++) {
//         let rowdata = "";
//         for (let j = number; j > i; j--) {
//             rowdata = rowdata + "-";
//         }
//         for (let k = 0; k < i * 2 - 1; k++) {
//             rowdata = rowdata + "*";
//         }
//         x.push(rowdata);
//     }
//     for (let i = 1; i <= number - 1; i++) {
//         let rowdata = "";
//         for (let j = 0; j < i; j++) {
//             rowdata = rowdata + "-";
//         }
//         // printing star
//         for (let k = (number - i) * 2 - 1; k > 0; k--) {
//             rowdata = rowdata + "*";
//         }
//         x.push(rowdata);
//       }
//     return x;
// }


// export default FullDiamond