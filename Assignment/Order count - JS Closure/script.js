// Your code here
function generateOrder() {
    let count = 0;
    return function func() {
        count++;
        return "Total orders = " + count;
    };
}