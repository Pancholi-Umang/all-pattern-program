// 1234
//  123
//   12
//    1

const BlackIn7 = (number) => {
    let x = [];
    for(let i=number;i>=1;i--){
        let rowdata = "";
        for(let j=1;j<=number-i;j++){
            rowdata = rowdata + "-";
        }
        for(let k=1;k<=i;k++){
            rowdata = rowdata + k;
        }
        x.push(rowdata)
    }
    return x;
};


export default BlackIn7