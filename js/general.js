"use strict";

let form = document.getElementById("form");

form.addEventListener("focus", function (event) {
    event.target.style.borderBottom = "#1c4b82 2px solid";
}, true)
form.addEventListener("blur", function (event) {
    event.target.style.borderBottom = "green 2px solid";
}, true)