// 1
// 12
// 1-3
// 1234

const HollowHalfNumber = (numbers) => {
    // hollow inverted Half pyramid
    let number = Number(numbers);
    let x = [];
    let extra = 1;
    for (let i = 1; i <=number; i++) {
        let rowdata = "";
        for(let j=1; j<=i; j++){
            if(j==1|| i == number || i-j == number-number){
                rowdata=rowdata+ j;
                extra++;
            }
            else{   
                rowdata = rowdata + "-";
            }
        }
        x.push(rowdata)
    }
    return x;
}

export default HollowHalfNumber


// const HollowHalfNumber = (number) => {
//     //inverted Half
//     let x = [];
//     for (let i = 1; i <= number; i++) {
//         let rowdata = "";
//         for (let j = 1; j <= number; j++) {
//             if (j == 1 || i == j || i == number)
//             rowdata = rowdata + j;
//             else
//             rowdata = rowdata + "-";
//         }
//         x.push(rowdata);
//     }
//     return x;
// }

// export default HollowHalfNumber




