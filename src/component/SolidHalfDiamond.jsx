// 1                *
// 22
// 333
// 4444
// 333
// 22
// 1

// *
// **
// ***
// ****
// ***
// **
// *



// const SolidHalfDiamond = (number) => {
//     let x = [];
//     //up pyramid
//     for(let i=1;i<number;i++){
//         let rowdata = "";
//         for(let j=1;j<=i;j++){
//             rowdata = rowdata + i;
//         }
//         x.push(rowdata)
//     }
//     // down pyramid
//     for(let i=number;i>=1;i--){
//         let rowdata = "";
//         for(let j=i;j>=1;j--){
//             rowdata = rowdata + i;
//         }
//         x.push(rowdata)
//     }
//     return x;
// }


// export default SolidHalfDiamond

const SolidHalfDiamond = (number) => {
    let x = [];
    for (let i = 1; i <= number; i++) {
        let rowdata = "";
        for (let j = 0; j < i; j++) {
            rowdata = rowdata + "*";
        }
        x.push(rowdata);
    }
    for (let i = 1; i <= number - 1; i++) {
        let rowdata = "";
        for (let j = 0; j < number - i; j++) {
            rowdata = rowdata + "*";
        }
        x.push(rowdata);
    }
    return x;
}
export default SolidHalfDiamond