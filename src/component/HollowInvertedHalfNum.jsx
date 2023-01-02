// 1234
// 2-4
// 34
// 4

const HollowInvertedHalfNum = (number) => {
    let x = [];
    for (let i = 1; i <= number; i++) {
        let rowdata = "";
        for (let j = i; j <= number; j++) {
            if (i == 1 || j == i || j == number) {
                rowdata = rowdata + j;
            }
            else {
                rowdata = rowdata + "-";
            }
        }
        x.push(rowdata)
    }
    return x;
}
export default HollowInvertedHalfNum

// const HollowInvertedHalfNum = (numbers) => {
//     // hollow inverted Half pyramid
//     let number = Number(numbers);
//     let x = [];
//     let extra = number;
//     for (let i = 1; i <=number; i++) { // with this increment order
//         let rowdata = "";
//         for(let j=1; j<=extra; j++){
//                 if(i==1){  //here row is ascending order so row+col=inputValue+1
//                     // i==1 ni jagya par i==number pan lakhi shakaay te first row ne target kare atle
//                     rowdata=rowdata+j;
//                 }
//                 else if(j==1){
//                     rowdata = rowdata + " "+i;
//                 }
//                 else if(i+j == number+1){
//                     rowdata=rowdata+number;
//                 }
//                 else{
//                     rowdata=rowdata+"-";
//                 }
//             }
//             extra--;
//         x.push(rowdata)
//     }
//     return x;
// }

// export default HollowInvertedHalfNum


