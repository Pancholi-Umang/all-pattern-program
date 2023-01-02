//    *
//   *-*
//  *---*
// *******


const HollowFullPyramid = (number) => {
    let numbers = Number(number);
    let x = [];
    for(let i=1;i<=numbers;i++){
        let rowdata = "";
        for(let j=1;j<=(numbers*2-1);j++){
            if(i+j==numbers+1 || j-i==numbers-1 || i==numbers){
                rowdata = rowdata + "*"
            }
            else{
                rowdata = rowdata + "-"
            }
        }
        x.push(rowdata);    
    }
    return x; 
}
 
export default HollowFullPyramid



// const HollowFullPyramid = (number) => {
//     let x = [];
//     for (let i=1; i<=number; i++) {
//         let rowdata = "";
//         for (let j=i; j<number; j++) {
//             rowdata = rowdata + "-";
//         }
//         for(let k=1; k<=(2*i-1); k++) {
//             console.log(i==number);
//             if(i==number || k==1 || k==(2*i-1))
//             {
//                 rowdata = rowdata + "*";
//             }
//             else
//             {
//                 rowdata = rowdata + "-";
//             }
//         }
//         x.push(rowdata);
//     }
//     return x;
// }

// export default HollowFullPyramid