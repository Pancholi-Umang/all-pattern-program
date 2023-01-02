// ****
// *-*
// **
// *

const HollowInventedHalf = (numbers) => {
    // hollow inverted Half pyramid
    let number = Number(numbers);
    let x = [];
    let extra = number;
    for (let i = 1; i <=number; i++) { // with this increment order
        let rowdata = "";
        for(let j=1; j<=extra; j++){
                if(j==1 || i==1 || i+j == number+1){  //here row is ascending order so row+col=inputValue+1
                    // i==1 ni jagya par i==number pan lakhi shakaay te first row ne target kare atle
                    rowdata=rowdata+"*";
                }
                else{
                    rowdata=rowdata+"-";
                }
            }
            extra--;
        x.push(rowdata)
    }
    return x;
}

export default HollowInventedHalf




// const HollowInventedHalf = (numbers) => {
//     // hollow inverted Half pyramid
//     let number = Number(numbers);
//     let x = [];
//     for (let i = number; i >= 1; i--) {  //with this decrement order
//         let rowdata = "";
//         for(let j=1; j<=i; j++){
//             console.log(number,i,j)
//             if(j==1|| i == number || i-j == number-number){  // here row is reverse order so row+col=inputValue-1
//                 rowdata=rowdata+"*";
//             }
//             else{   
//                 rowdata = rowdata + "-";
//             }
//         }
//         x.push(rowdata) 
//     }
//     return x;
// }

// export default HollowInventedHalf





// const HollowInventedHalf = (number) => {
//     // hollow inverted Half pyramid
//     let x = [];
//     for (let i = number; i > 0; i--) {
//         let rowdata = "";
//         if (i == 1 || i == number) {
//             for (let j = 1; j <= i; j++) {
//                 rowdata = rowdata + "*";
//             }
//         }
//         else {
//             for (let k = 1; k <= i; k++) {
//                 if (k == 1 || k == i) {
//                     rowdata = rowdata + "*";
//                 }
//                 else {
//                     rowdata = rowdata + "-";
//                 }
//             }
//         }
//         x.push(rowdata)
//     }
//     return x;
// }

// export default HollowInventedHalf

