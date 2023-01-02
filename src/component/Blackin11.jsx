// 4
// 34
// 234
// 1234

const Blackin11 = (number) => {
    let x = [];
    for (let i = number; i >= 1; i--) {
        let rowdata = "";
        for (let j = i; j <= number; j++) {
            rowdata = rowdata + j;
        }
        x.push(rowdata)
    }
    return x;
};
export default Blackin11
