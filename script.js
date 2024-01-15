"use strict";

const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

let inputFilter;

const palindromeChecker = function () {
  inputFilter = textInput.value.replace(/[^A-Z0-9]/gi, "");
  let reverse = inputFilter
    .split("")
    .reverse()
    .join("")
    .replace(/[^A-Z0-9]/gi, "");
  if (inputFilter.toLowerCase() === reverse.toLowerCase()) {
    result.textContent = `${textInput.value} is a palindrome`;
    if (textInput.value === "") {
      alert("Please input a value");
      result.textContent = "";
    }
  } else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }
};

checkButton.addEventListener("click", palindromeChecker);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    palindromeChecker();
  }
});
