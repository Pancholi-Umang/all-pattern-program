// *1*
// *121*
// *12321*
// *121*
// *1*


const Other4 = (numbers) => {
    let x = [];
    let number = Number(numbers);
    for (let i = 1; i < number; i++) {
        let rowdata = "";
        rowdata = rowdata + "*";
        for(let j=1;j<=i;j++){
            rowdata = rowdata + j;
        }
        for(let k=i-1;k>=1;k--){
            rowdata = rowdata + k;
        }
        rowdata = rowdata + "*";
        x.push(rowdata);
    }
    for (let i = number; i >= 1; i--) {
        let rowdata = "";
        rowdata = rowdata + "*";
        for(let j=1;j<=i;j++){
            rowdata = rowdata + j;
        }
        for(let k=i-1;k>=1;k--){
            rowdata = rowdata + k;
        }
        rowdata = rowdata + "*";
        x.push(rowdata);
    }
    return x;
}
export default Other4 ;