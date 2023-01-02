//     5
//    545
//   54345
//  5432345
// 543212345
//  5432345
//   54345
//    545
//     5
const Black9 = (number) => {
      let x = [];
      for (let i = number; i >= 1; i--) {
          let rowdata = "";
          for (let jk = i; jk > 1; jk--) {
              rowdata = rowdata + "-";
          }
          for (let j = number; j >= i; j--) {
              rowdata = rowdata + j;
          }
          for (let kj = i+1; kj <= number; kj++) {
              rowdata = rowdata + kj;
          }
          x.push(rowdata)
      }
      for (let i = 2; i <=number ; i++) {
        let rowdata = "";
        for (let jk = i; jk > 1; jk--) {
            rowdata = rowdata + "-";
        }
        for (let j = number; j >= i; j--) {
            rowdata = rowdata + j;
        }
        for (let kj = i+1; kj <= number; kj++) {
            rowdata = rowdata + kj;
        }
        x.push(rowdata)
    }
      return x;
    };
    
    export default Black9