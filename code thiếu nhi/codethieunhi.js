function total(so1, so2) {
    let result = "";
    let flag = 0;

    while (so1.length < so2.length)
        so1 = "0" + so1;
    while (so1.length > so2.length)
        so2 = "0" + so2;

    for (let i = so1.length - 1; i >= 0; i--) {
        let temp = parseInt(so1[i]) + parseInt(so2[i]) + flag;
        if (temp >= 10) {
            result = (temp - 10) + result;
            flag = 1;
        } else {
            result = temp + result;
            flag = 0;
        }
    }

    if (flag === 1)
        result = "1" + result;

    return result;
}

function multiply(num1, num2) {
    const n1 = num1.length;
    const n2 = num2.length;
    const length = new Array(n1 + n2).fill(0);
    const result = new Array(n1 + n2).fill(0);
  
    for (let i = n1 - 1; i >= 0; i--) {
      for (let j = n2 - 1; j >= 0; j--) {
        const temp = (num1[i] - '0') * (num2[j] - '0');
        const p1 = i + j;
        const p2 = i + j + 1;
        const sum = temp + result[p2];
  
        const carry = Math.floor(sum / 10);
        const remainder = sum % 10;
  
        result[p1] += carry;
        result[p2] = remainder;
      }
    }
  
    let resultStr = '';
    let foundNonZeroDigit = false;
  
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== 0) {
        foundNonZeroDigit = true;
      }
      if (foundNonZeroDigit) {
        resultStr += result[i];
      }
    }
  
    return resultStr || '0';
  }

function main(){
    const so1 ="12345";
    const so2 = "6789"
    console.log(total(so1,so2));
    console.log(multiply(so1,so2));
}

main();
