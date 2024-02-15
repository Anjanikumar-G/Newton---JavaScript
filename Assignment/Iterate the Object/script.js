function solve(obj){
    // Iterate using for of loop
    for (const value of Object.values(obj)) {
        console.log(value);
    }


    // Iterate using for in loop
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}