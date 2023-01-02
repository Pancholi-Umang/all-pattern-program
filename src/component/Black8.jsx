//   1
//  121
// 12321
//  121
//   1

const Black8 = (number) => {
    let x = [];
    for (let i = 1; i <= number; i++) {
        let rowdata = "";
        for (let j = 1; j <= number - i; j++) {
            rowdata = rowdata + "-";
        }
        for (let k = 1; k <= i; k++) {
            rowdata = rowdata + k;
        }
        for (let m = i - 1; m >= 1; m--) {
            rowdata = rowdata + m;  
        } 
        x.push(rowdata);
    }
    for (let i = number-1; i >= 1; i--) {
        let rowdata = "";
        for (let j = 1; j <= number - i; j++) {
            rowdata = rowdata + "-";
        }
        for (let k = 1; k <= i; k++) {
            rowdata = rowdata + k;
        }
        for (let m = i - 1; m >= 1; m--) {
            rowdata = rowdata + m;  
        } 
        x.push(rowdata);
    }
    return x;
};

export default Black8;
