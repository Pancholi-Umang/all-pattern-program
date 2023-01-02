// 1
// 21
// 321

const Black10 = (number) => {
    let x = [];
    for(let i=1;i<=number;i++){
        let rowdata = "";
        for(let j=i; j>=1; j--){
            rowdata = rowdata + j;
        }
        x.push(rowdata)
    }
    return x;
};
export default Black10
