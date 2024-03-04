// javascript code goes here
let userData = null;
function getUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      userData = data;
      console.log("Data is", data);
      const name = data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("fullname").innerText = name;
      const userImage = document.getElementById("user-image");
      userImage.setAttribute("src", data.results[0].picture.large);
    });
}

function showData(propertyToShow) {
  let outputString = "";
  const result = userData.results[0];
  switch (propertyToShow) {
    case "age":
      outputString = result.dob.age;
      break;
    case "email":
      outputString = result.email;
      break;
    case "phone":
      outputString = result.phone;
      break;
    default:
      outputString = "";
  }
  document.getElementById("data").innerText = outputString;
}
getUser();
