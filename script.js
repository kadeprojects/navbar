window.onload = function() {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("button");

    toggle.onclick = function() {
        console.log("button clicked!");
        if (globalNavbar.className == "open") {
            globalNavbar.className = "";
          document.getElementById("hello").innerHTML = "+";
        }
        else {
          globalNavbar.className = "open";
          document.getElementById("hello").innerHTML = "X";
        }
    }
}