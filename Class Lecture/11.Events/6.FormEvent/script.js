// FORMS

// 1. Select the element

const formElement = document.getElementById("form");
console.log(formElement);

// formElement.addEventListener("submit", (event) => {
//   event.preventDefault(); // this line of code prevents the Default
//   //    behaviour (i,e: submitting to action url and RELOADING THE PAGE)
// });

// Copy paste Event

const nameElement = document.getElementById("name");
// nameElement.addEventListener("paste", (event) => {
//   console.log("hey someone paster");
//   event.preventDefault();
// });

// nameElement.addEventListener("copy", (event) => {
//   console.log("hey someone copied");
//   event.preventDefault();
// });

// Focus and Blur -

// nameElement.addEventListener("focus", () => {
//   console.log("focus");
// });

// nameElement.addEventListener("blur", () => {
//   console.log("blur");
// });

// 3 keys event -> keydown, keyup and keypress

// nameElement.addEventListener("keypress", (event) => {
//   console.log("button clicked");
//   //   console.log(event);
//   const key = event.key;
//   console.log(key);
// });

/*
    Question:  if you write in small cap in an Input box automatically it should become capital


*/

// nameElement.addEventListener("change", (event) => {
//   console.log(event);
//   const targetElement = event.target;
//   targetElement.value = String(targetElement.value).toUpperCase();
// });

/*
    Question:  you want only the 1st letter to be capital rest should be in nonCapital


*/

nameElement.addEventListener("keyup", (event) => {
  console.log(event);
  const targetElement = event.target;
  const value = String(targetElement.value);

  targetElement.value =
    value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
});

/*
  when we do event.preventDefault(); 
  we do 2 things 
  
  1. Prevent page reload (WHICH IS GOOD).
  2. prevent payload to go to utkarsh.com (THIS IS BAD).

  To solve this thing we have to do the 2nd thing ourself. Mentioned below.


  formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElem = event.target; // form Element
  console.dir(formElem);
  const elements = formElem.elements; // {elementName: #element}

  console.dir(elements);

  // Elements
  const nameElement = elements.name;
  const emailElement = elements.email;
  const standardElement = elements.standard;

  // values
  const name = nameElement.value;
  const email = emailElement.value;
  const standard = standardElement.value;

  const payload = {
    name: name,
    email: email,
    standard: standard,
  };

  console.log(payload, "payload");

  fetch("utkarsh.com", { method: "post", body: JSON.stringify(payload) });
});

*/

// --------------------- REGEX -----------------------

// how to submit the Form after I ded event.preventDefault();

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElem = event.target; // form Element
  console.dir(formElem);
  const elements = formElem.elements; // {elementName: #element}

  console.dir(elements);

  // Elements
  const nameElement = elements.name;
  const emailElement = elements.email;
  const standardElement = elements.standard;

  // values
  const name = nameElement.value;
  const email = emailElement.value;
  const standard = standardElement.value;

  // Validation

  // Name ->
  const nameValidation = nameValidator(name);
  if (!nameValidation) {
    console.log("Name is requied and It should be according to the rules!!!");
    return;
  }

  const payload = {
    name: name,
    email: email,
    standard: standard,
  };

  console.log(payload, "payload");

  fetch("utkarsh.com", { method: "post", body: JSON.stringify(payload) });
});

function nameValidator(name) {
  const nameRegex = /^[a-zA-Z]+$/;

  const validate = name.match(nameRegex); // null or object([])
  // null -> "1utkarsh", "utkarsh1", "utakr1sh"
  // [dasdasd ,asdasd ] -> "utkrasah", "akash"

  if (validate === null) {
    return false;
  } else {
    return true;
  }
}

function phoneNumberValidator(phone) {
  const phoneRegex = /^[0-9]{10}$/;

  const validateAnswer = String(phone).match(phoneRegex); // null , []
  // null -> when number has a problem
  // [] -> when Number is GOOD.

  if (validateAnswer) {
    return true;
  } else {
    return false;
  }
}

// ....... Form Validation  ......  Regex