// Js By default have Helping classes
/*
  1. Object 
  2. Array
  3. Math
*/

//  -------------------------- Object Class ---------------

const obj = {
    name: "utkarsh",
    class: 9,
    rollNumber: 15,
  };
  
  // If you want to get Key-Value Pair
  
  const keyValueArray = Object.entries(obj);
  console.log(keyValueArray);
  
  // If you want Only keys
  
  const onlyKeysArray = Object.keys(obj);
  console.log(onlyKeysArray);
  
  // if you want Only Values
  
  const onlyValuesArray = Object.values(obj);
  console.log(onlyValuesArray);