document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "open-menu") {
    openMenu();
  } else if (targetId == "close-menu") {
    closeMenu();
  }
});

function openMenu() {
  document.getElementById("menu").style.display = "block";
}

function closeMenu() {
  document.getElementById("menu").style.display = "none";
}
