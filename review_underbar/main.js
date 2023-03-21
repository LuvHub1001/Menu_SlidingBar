const horizontalUnderLine = document.getElementById("horizontal-underline");
const horizontalMenu = document.querySelectorAll("nav:first-child a");
const verticalUnderLine = document.getElementById("vertical-underline");
const verticalMenu = document.querySelectorAll("nav:nth-child(2) a");

horizontalMenu.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    horizontalIndicate(e);
  });
});

const horizontalIndicate = (e) => {
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
};

verticalMenu.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    verticalIndicate(e);
  });
});

const verticalIndicate = (e) => {
  verticalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  verticalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  verticalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
};
