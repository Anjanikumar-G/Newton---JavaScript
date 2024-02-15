let resultObj = {};

function flatTheObj(obj, parent) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            flatTheObj(obj[key], `${parent}_${key}`);
        } else {
            resultObj[`${parent}_${key}`] = obj[key];
        }
    }
    return resultObj;
}
let obj = {"address":{"personal":"Bangalore","area":"Koramangala"},"office":{"state":"Hyderabad","area":{"landmark":"HitechCity"}},"name":"Amit"};
let parent = 'user2';
// let answer = flatTheObj(obj, parent);
// console.log(answer);