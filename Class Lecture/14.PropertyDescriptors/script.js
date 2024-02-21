/// ------- Property Descriptors ------
/*
  you can edit,delete and get property in for in loop all these things are 
  viabable bec of property flag.
*/

let obj = {
    name: "utkarsh", // delete /// edit
    class: 9,
  };
  
  console.log(obj);
  
  // EDIT ?
  // obj.name = "akash";
  
  // delete a key ?
  // delete obj.name;
  
  // can you write on this Property
  
  // Property Flags ->
  // 1. Writable: if the writable value is TRUE, basically means we can change the value otherwise not.
  // 2. Enumerable: if TRUE -> you can do for in loop. (YOU would be included in FOR-IN loop)
  // 3. configurable: if TRUE -> properties can be DELETED.
  
  // NOTE: OwnProperty -> are inside the Object on the 1st level and other properties which
  //  are on PROTOTYPE they are NOT OwnProperty.
  
  const descriptorOfName = Object.getOwnPropertyDescriptor(obj, "name");
  console.log(descriptorOfName, "orginal property descriptoe");
  
  // -------------  Change the Property Flag ---------
  
  // 1 . 0----------- WRITABLE -------
  
  // Object.defineProperty(obj, "name", {
  //   writable: false,
  // });
  
  // obj.name = "akash"; // this things will not have any effect
  
  // console.log(obj, "after the name edit");
  
  // console.log(Object.getOwnPropertyDescriptor(obj, "name"));
  
  // 2 . -------------- configurable -----------
  
  // Object.defineProperty(obj, "name", {
  //   configurable: false,
  // });
  
  // delete obj.name;
  
  // console.log(obj, "after the delete");
  
  // console.log(Object.getOwnPropertyDescriptor(obj, "name"));
  
  // 3. --------------- enumerability --------------
  
  // Object.defineProperty(obj, "name", {
  //   enumerable: false,
  // });
  
  // for (let key in obj) {
  //   console.log(key, "enum");
  // }
  
  // NOTE: You can learn about
  // 1. Object.freeze()
  // 2. Object.isFrozen()
  // 3. Object.isSealed()