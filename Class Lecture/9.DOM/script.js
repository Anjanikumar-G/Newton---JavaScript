// HTML -> DOCUMENT (both the things are same);

//  ------------------ DOM TREE -----------------

// const containerElement = document.getElementById("container");
// containerElement.append(newHeading1Element);

// DOM tree is created By Browser Itself.
// Tree is choosed bec it is a good representation of Relationship B/w Nodes. (Element in ram)

//NOTE: TO VISUALIZE DOM TREE: https://bioub.github.io/dom-visualizer/

/*
  Types of Nodes
  1. Element Node (h1, div, HTML, body, P)
  2. Text Node (Real text and Space)  
  3. Comment Node (Html Comments)
*/

//  ------------------- SELECTORS (get the element) -------------------

// 1. getElementById

// const headingElement = document.getElementById("heading");
// console.log(headingElement, "heading element"); // "English readable Element"
// console.dir(headingElement); // "REAL OBject";

// 2. getElementsByTagName.

// console.log("hello");

// const h1HeadingElements = document.getElementsByTagName("h1");
// console.log(h1HeadingElements);

// 3. getElementsByClassName

// const asdClassElementList = document.getElementsByClassName("ads");
// console.log(asdClassElementList);

// 4. querySelector.  -> It selects the 1st Element only ()if you know CSS selector you can you it as well

// const element = document.querySelector(".ads");
// console.log(element);
// console.dir(element);

// 5. querySelectorAll

// const elementList = document.querySelectorAll(".ads");
// console.log(elementList);

//  ----------------------------- EDIT -----------------------

// TODO
// Question: What will you use to Select heading1 -> getElementById or querySelector ?

// answer: getElementById (Very very fast)

// const headingElement = document.getElementById("heading1");
// console.dir(headingElement);
// console.dir(headingElement.id);

// Question: attribute vs Properties
// Attribute we give in HTML and Properties are of ELEMENT JS Object
// Example property className  === Attribute class

// Question  to change the background color to aqua
// headingElement.style.backgroundColor = "yellow";

// ---------------------------- Delete an Element (Removal) ------------------

/*
    1. Select the element which you want to delete
    2. .remove() on that element.

*/

// const paragraphElement = document.getElementById("para");
// console.log(paragraphElement);
// paragraphElement.remove();

// ------------------------ Creation Of ELement and insert an element (Create) ---------------

/*
    1. Create an element
    2. Edit that element

    3. Insert Element inside DOM. but before that I need to select its parent 

*/

// const newHeading1Element = document.createElement("h1");
// console.log(newHeading1Element);

// newHeading1Element.textContent = "xyz";
// newHeading1Element.style.backgroundColor = "aqua";

// const bodyElement = document.body;
// bodyElement.prepend(newHeading1Element);
// console.log(bodyElement);

// --------------------------- ------- Advance Editing Element ----------------

// ------------ Insertion ---------

// 1. append. -> add item in the END of the list/Element

// const namesListElement = document.getElementById("names"); // ul
// console.dir(namesListElement);

// const studentList = ["Amith", "Saurav", "yash", "hemant"]; // from database I got it. Do not worry about how I got it.

// for (let index = 0; index < studentList.length; index++) {
//   const studentName = studentList[index];

//   // Create an LI Element
//   const listItemElement = document.createElement("li"); // <li></li>
//   listItemElement.textContent = studentName; // <li>StudentName</li> // this thing is NOT ATTACHED TO DOM TREE

//   //   Now we have to insert the element
//   // the question is Where to Insert
//   namesListElement.append(listItemElement); // Now this is attached...
// }

// 2. Prepend -> add item in the start of the list/element

// const namesListElement = document.getElementById("names"); // ul
// console.dir(namesListElement);

// const studentList = ["Amith", "Saurav", "yash", "hemant"]; // from database I got it. Do not worry about how I got it.

// for (let index = 0; index < studentList.length; index++) {
//   const studentName = studentList[index];

//   // Create an LI Element
//   const listItemElement = document.createElement("li"); // <li></li>
//   listItemElement.textContent = studentName; // <li>StudentName</li> // this thing is NOT ATTACHED TO DOM TREE

//   //   Now we have to insert the element
//   // the question is Where to Insert
//   namesListElement.prepend(listItemElement); // Now this is attached...
// }

// 3. before -> insert element before the selected Element
// const namesListElement = document.getElementById("names"); // ul
// const heading1Element = document.createElement("h2");
// heading1Element.textContent = "Here's  the list of student";

// namesListElement.before(heading1Element);

// 4. after -> insert element after the selected Element
// const footerElement = document.createElement("h3");
// footerElement.textContent = "End of the list";

// namesListElement.after(footerElement);

// 5. replaceWith -> replaces node with the given nodes or strings.

// --------- Another Way to Insert Element insertAdjacentHTML --------------
// 1. "beforebegin" – insert html immediately before elem,
// 2. "afterbegin" – insert html into elem, at the beginning,
// 3. "beforeend" – insert html into elem, at the end,
// 4. "afterend" – insert html immediately after elem.

// NOTE: Read the above things from: https://javascript.info/modifying-document.

// --------  how to select body element -----------

// const body = document.body;
// const body = document.getElementsByTagName("body")[0];

// --------------------- ------- Fragments -----------------
/*
    Question is are we inserting in a better way ? 
    Answer NO. 


    const namesListElement = document.getElementById("names"); // ul
    console.dir(namesListElement);

    const studentList = ["Amith", "Saurav", "yash", "hemant"]; // from database I got it. Do not worry about how I got it.

    for (let index = 0; index < studentList.length; index++) {
    const studentName = studentList[index];

    // Create an LI Element
    const listItemElement = document.createElement("li"); // <li></li>
    listItemElement.textContent = studentName; // <li>StudentName</li> // this thing is NOT ATTACHED TO DOM TREE

    //   Now we have to insert the element
    // the question is Where to Insert
    namesListElement.append(listItemElement); // Now this is attached...
    }


    In this code WE WENT TO DOM and Request 4 TIMES to Insert all the values 
*/

// We will use Fragments ...

// const fakeNodeOfNamesListElement = new DocumentFragment();

// const namesListElement = document.getElementById("names");
// console.dir(namesListElement);

// const studentList = ["Amith", "Saurav", "yash", "hemant", "utkarsh"];

// for (let index = 0; index < studentList.length; index++) {
//   const studentName = studentList[index];

//   // Create an LI Element
//   const listItemElement = document.createElement("li");
//   listItemElement.textContent = studentName;

//   // Insted Of adding the Element inside the DOM (namesListElement) we should Add it someplace else.

//   //   namesListElement.append(listItemElement);
//   fakeNodeOfNamesListElement.append(listItemElement);
// }
// namesListElement.append(fakeNodeOfNamesListElement);

//  ---------------   ADVANCE EDIT ELEMENTS (innerHtml, textContent, innerText) ----------

const containerElement = document.getElementById("container");
console.dir(containerElement);

// -------- EDIT

// 1. textContent -> text content is laying down the items without formatting(new line)

// const str = 'asdasdsadsad
// asdasdsad
// '

// containerElement.textContent = `something
// asdas,dhaskd     asdahskdjhaskdj asd
// dhakjshdkajsd  <strong>India</strong>    askjdaksjdhakjsdh
// different  s,dfbas,daskd`;

// 2. innerHtml -> is taking the string as HTML

// containerElement.innerHTML = `something
// asdas,dhaskd  asdahskdjhaskdj asd
// dhakjshdkajsd  <u><strong>India</strong></u>   askjdaksjdhakjsdh
// different  s,dfbas,daskd`;

// 3. innerText -> is taking FOrmatting into consideration (new line)

// containerElement.innerText = `something
// asdas,dhaskd     asdahskdjhaskdj asd
// dhakjshdkajsd  <strong>India</strong>    askjdaksjdhakjsdh
// different  s,dfbas,daskd`;

// NOTE: innerHTML is DANGEROUS !!!!!!!!
// containerElement.innerHTML = `<script>// hacker scripts </script>`;

/*

    Question: Use innerHTML for inserting a new <li> with the student name

    <ul id="names" class="">
        <li>Mayank</li>
        <li>yash</li>
        <li>priyanka</li>
        <li>Vikash</li>
    </ul>



*/

// anaswer

// Way 1

const namesListElement = document.getElementById("names");

// const newListItem = document.createElement("li");
// newListItem.textContent = "utkarsh";

// namesListElement.append(newListItem);

// Way 2 -> innerHtml

// console.dir(namesListElement);

// console.log(namesListElement.innerHTML, "inner html view");

// namesListElement.innerHTML += `<li>utkarsh100</li>\n`;