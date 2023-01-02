// 12345
// 1234
// 123
// 12
// 1

const InvertedHalfPyramidNum = (number) => {
    //inverted Half
      let x = [];
      for(let i = number; i >= 1; i--) {
      let rowdata = "";
      for(let j = 1; j <= i; ++j) {
          rowdata = rowdata + j;
      }
      x.push(rowdata);
    }
    return x;
  }
  
  export default InvertedHalfPyramidNum