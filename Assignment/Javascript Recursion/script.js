const getValue = (num) => {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return getValue(sum);
};
