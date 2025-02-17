const myImage =document.querySelector("img");

myImage.onclick =() => {
  const mySrc = myImage.getAttribute("src")
  if (mySrc === "images/1111.jpg") {
    myImage.setAttribute("src", "images/2222.jpg");
  } else {
    myImage.setAttribute("src", "images/1111.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}