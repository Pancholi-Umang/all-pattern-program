// 1
// 23
// 456
// 78910

function NewLineNumPyramid(number) {

   let x = [];
   let newLineNum = 1;
   for (let i = 1; i <= number; i++) {
      let rowdata = "";
      for (let j = 1; j <= i; j++) {
         rowdata = rowdata + newLineNum;
         ++newLineNum;
      }
      x.push(rowdata);
   }
   for (let i = number; i >= 1; i--) {
      let rowdata = "";
      for (let j = 1; j <= i; j++) {
         rowdata = rowdata + newLineNum;
         --newLineNum;
      }
      x.push(rowdata);
   }
   return x;
}

export default NewLineNumPyramid

