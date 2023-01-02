// 4321
// 321
// 21
// 1

const Blackin6 = (number) => {
    let x = [];
    for (let i = number; i > 0; i--) {
      let rowdata = "";
      for (let j = i; j >=1 ; j--) {
          rowdata = rowdata + j;
      }
      x.push(rowdata);
    }
    return x;
  };
  
  export default Blackin6; 
  