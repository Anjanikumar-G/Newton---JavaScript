function arrayProperties(arr1, arr2) {
    //    write your code here
        let arr3 = arr2.concat(arr1);
        
    
        arr3.push(arr2);
        console.log(arr3);
    
        arr3.pop();
        
        console.log(arr3.reverse());
    
        console.log(arr3.lastIndexOf("orange"));
    
        let slicedArray = arr3.slice(0, 3);
        console.log(slicedArray.length);
    
        let joinedArray = slicedArray.join(",");
        console.log(joinedArray);
    
    
    }