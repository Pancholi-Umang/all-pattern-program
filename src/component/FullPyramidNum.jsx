//      1
//     232
//    34543
//   4567654

const FullPyramidNum = (number) => {
    let x = [];
    for(let i = 1; i <= number; i++) {
    let rowdata = "";
    for(let j = i; j < number; j++) {
        rowdata = rowdata + "-" ;
    }
    for (let k = i; k <= i*2-1; k++) {
        rowdata = rowdata + k;
    }
    for (let l = i*2-2; l > i-1; l--) {
        rowdata = rowdata + l;
    }
    
    x.push(rowdata);
  }
  return x;
}

export default FullPyramidNum