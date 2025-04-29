function setupButtons() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("btn" + i).addEventListener("click", function () {
      console.log("Button " + i + " clicked");
    });
  }
}
