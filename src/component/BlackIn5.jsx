//    1
//   12
//  123
// 1234

const BlackIn5 = (number) => {
  let x = [];
  for (let i = 1; i <= number; i++) {
    let rowdata = "";
    for (let j = i; j < number; j++) {
      rowdata = rowdata + "-";
    }
    for (let k = 1; k <= i; k++) {
      rowdata = rowdata + k;
    }
    x.push(rowdata);
  }
  return x;
};

export default BlackIn5;
