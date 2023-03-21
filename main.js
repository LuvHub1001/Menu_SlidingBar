let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalUndertLine = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalUnderLine.style.width = horizontalMenus[0].offsetWidth + "px";
horizontalUnderLine.style.left = horizontalMenus[0].offsetLeft + "px";
horizontalUnderLine.style.top =
  horizontalMenus[0].offsetTop + horizontalMenus[0].offsetHeight + "px";

verticalUndertLine.style.width = verticalMenus[0].offsetWidth + "px";
verticalUndertLine.style.left = verticalMenus[0].offsetLeft + "px";
verticalUndertLine.style.top =
  verticalMenus[0].offsetTop + verticalMenus[0].offsetHeight + "px";

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
