//      1
//     222
//    33333
//   4444444
//  555555555
// 66666666666

const FullPyramidNum = (number) => {
    let x = [];
    for(let i = 1; i <= number; i++) {
        let rowdata = "";
    for(let j = 1; j <= number - i; j++) {
        rowdata = rowdata + "-" ;
    }
    for(let k = 0; k < 2 * i - 1; k++){
        rowdata = rowdata + i;
    }
    x.push(rowdata);
  }
  return x;
}

export default FullPyramidNum