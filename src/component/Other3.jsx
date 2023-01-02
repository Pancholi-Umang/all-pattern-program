// 1
// 2*3
// 4*5*6
// 4*5*6
// 2*3
// 1


const Other3 = (numbers) => {
    let x = [];
    let number = Number(numbers);
    let Looping =1;
    for (let i = 1; i <= number; i++) {
        let rowdata = "";
        for (let j = 1; j <= i * 2 - 1; j++) {
            if (j % 2 !== 0) {
                rowdata = rowdata + Looping;
                Looping++;
            }
            else if (j % 2 == 0) {
                rowdata = rowdata + "*";
            }
        }  
        x.push(rowdata);
    }
    for (let i = number; i >= 1; i--) {
        let rowdata = "";
        let storeReverseData = Looping-i;
        for (let j = 1; j <= i * 2 - 1; j++) {
            if (j % 2 !== 0) {
                rowdata = rowdata + storeReverseData;
                storeReverseData++;
            }
            else if (j % 2 == 0) {
                rowdata = rowdata + "*";
            }
        }
        Looping=Looping-i;
        x.push(rowdata);
    }
    return x;
}
export default Other3;

