// 1
// 2*2
// 3*3*3
// 2*2
// 1

const Other2 = (numbers) => {
    let x = [];
    let number = Number(numbers);
    for (let i = 1; i < number; i++) {
        let rowdata = "";
        for (let j = 1; j <= i * 2 - 1; j++) {
            if (j % 2 !== 0) {
                rowdata = rowdata + i;
            }
            else if (j % 2 == 0) {
                rowdata = rowdata + "*";
            }
        }
        x.push(rowdata);
    }
    for (let i = number; i >= 1; i--) {
        let rowdata = "";
        for (let j = 1; j <= i * 2 - 1; j++) {
            if (j % 2 !== 0) {
                rowdata = rowdata + i;
            }
            else if (j % 2 == 0) {
                rowdata = rowdata + "*";
            }
        }
        x.push(rowdata);
    }

    return x;
}
export default Other2;



// i vali rit work karti nathi

// const Other2 = (numbers) => {
//     let x = [];
//     let number = Number(numbers);
//     for (let i = 1; i <= number; i++) {
//         let rowdata = "";
//         for (let j = i; j <= i; j++) {

//             if (j % 2 == 0) {
//                 rowdata = rowdata + "*";
//             }
//             else {
//                 rowdata = rowdata + i;
//             }
//         }
//         x.push(rowdata);
//     }
//     return x;
// }
// export default Other2;

