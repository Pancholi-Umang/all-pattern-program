// full pyraamid with number
//    1
//   232
//  34534
// 4567456

const Other5 = (numbers) => {
    let x = [];
    let number = Number(numbers);
    for (let i = 1; i <= number; i++) {
        let rowdata = "";
        for (let j = i; j < number; j++) {
            rowdata = rowdata + "-";
        }
        for (let j = i; j <= i * 2 - 1; j++) {
            rowdata = rowdata + j;
        }
        for (let k = i; k < i * 2 - 1; k++) {
            rowdata = rowdata + k;
        }
        x.push(rowdata);
    }
    return x;
}
export default Other5;


// const Other5 = (numbers) => {
//     let x = [];
//     let number = Number(numbers);
//     for (let i = 1; i <= number; i++) {
//         let rowdata = "";
//         for (let j = i; j < number; j++) {
//             rowdata = rowdata + "-";
//         }
//         for (let k = i; k<i+i;k++) {
//             rowdata = rowdata + k;
//         }
//         for (let kl = i+i-2; kl>=i;kl--) {
//             rowdata = rowdata + kl;
//         }
//         x.push(rowdata);
//     }
//     return x;
// }
// export default Other5;