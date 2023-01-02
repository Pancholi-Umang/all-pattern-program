// 3
// 44
// 555
// 6666
// 555
// 44
// 3


const Other1 = (numbers) => {
    let x = [];
    let number = Number(numbers);
    for (let i = number; i < number + number; i++) {
        let rowdata = "";
        // for (let j = i; j >= number; j--) {
        //     rowdata = rowdata + i;
        // }
        for (let j = number; j <= i; j++) {
            rowdata = rowdata + i;
        }
        x.push(rowdata);
    }
    for (let i = number*2; i >= number; i--) {
        let rowdata = "";
        for (let j = number; j <= i; j++) {
            rowdata = rowdata + i;
        }
        // for (let j = i; j >= number; j--) {
        //     rowdata = rowdata + i;
        // }
        x.push(rowdata);
    }
    return x;
}
export default Other1;