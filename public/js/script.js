function responsiveMenu() {
    var x = document.getElementById("menu-bar");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
