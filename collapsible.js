function toggleDarkMode() {
    var element = document.body;
    if (element.classList.toggle("dark-mode")) {
        document.getElementById("dark-mode-button").innerHTML="It's too dark";
        localStorage.setItem("color-mode", "dark");
    }
    else {
        document.getElementById("dark-mode-button").innerHTML="It's too bright";
        localStorage.setItem("color-mode", "light");
      } 
}
function setDarkModeToPrevious() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.getItem("color-mode") == "dark") {
        toggleDarkMode();
      } 
    } 
  }
