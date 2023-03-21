let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalUndertLine = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

verticalMenus.forEach((menu) => {
  menu.addEventListener("click", (e) => verticalIndicator(e));
});

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

const verticalIndicator = (e) => {
  verticalUndertLine.style.left = e.currentTarget.offsetLeft + "px";
  verticalUndertLine.style.width = e.currentTarget.offsetWidth + "px";
  verticalUndertLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
};
