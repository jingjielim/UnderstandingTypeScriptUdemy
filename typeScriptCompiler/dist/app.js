"use strict";
var button = document.querySelector("button");
function clickHandler(message) {
    var userName = "max";
    console.log("Clicked! " + message);
}
button.addEventListener("click", clickHandler.bind(null, "Hello!!"));
//# sourceMappingURL=app.js.map