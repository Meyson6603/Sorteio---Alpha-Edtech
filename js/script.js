let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function (event) {
  event.stopPropagation();

  let mobileMenu = document.querySelector(".mobile-menu");
  let key = "";

  if (!mobileMenu.classList.contains("show")) {
    key = "add";
  } else {
    key = "remove";
  }

  mobileMenu.classList[key]("show");
});
