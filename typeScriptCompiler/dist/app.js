"use strict";
var button = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked! " + message);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
//# sourceMappingURL=app.js.map