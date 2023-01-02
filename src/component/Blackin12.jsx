// 12345
// 2345
// 345
// 45
// 5

const Blackin12 = (number) => {
  let x = [];
  for (let i = 1; i <= number; i++) {
    let rowdata = "";
    for (let j = i; j <= number; j++) {
            rowdata = rowdata + j
    }
    x.push(rowdata)
}
  return x;
};

  export default Blackin12