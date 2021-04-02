const button = document.querySelector("button")!;

function clickHandler(message: string) {
  const userName = "max";
  console.log("Clicked! " + message);
}

button?.addEventListener("click", clickHandler.bind(null, "Hello!!"));
