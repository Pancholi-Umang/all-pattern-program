//    1
//   1-3
//  1---5
// 1234567


const HollowFullPyramidNum = (number) => {
    let x = [];
    for (let i=1; i<=number; i++) {
        let rowdata = "";
        for (let j=i; j<number; j++) {
            rowdata = rowdata + "-";
        }
        for(let j=1; j<=(2*i-1); j++) {
            if(i==number || j==1 || j==(2*i-1))
            {
                rowdata = rowdata + j;
            }
            else
            {
                rowdata = rowdata + "-";
            }
        }
        x.push(rowdata);
    }
    return x;
}

export default HollowFullPyramidNum