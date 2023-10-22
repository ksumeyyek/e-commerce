//! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");

btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
});

btnCloseSidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});

/* click outside */
document.addEventListener("click", function (event) {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});
/* click outside */

//! home sidebar end

//! modal search start
const btnOpenSearch = document.querySelector(".search-button");
const searchModal = document.getElementsByClassName("modal-search");
const btnCloseSearch = document.querySelector("#close-search-model");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
//use modal-wrapper because modal-search all page contain
console.log(modalSearchWrapper);
btnOpenSearch.addEventListener("click", function () {
  searchModal[0].style.visibility = "visible";
  searchModal[0].style.opacity = "1";
});

btnCloseSearch.addEventListener("click", function () {
  searchModal[0].style.visibility = "hidden";
  searchModal[0].style.opacity = "0";
});

/* click outside */
document.addEventListener("click", function (event) {
  if (
    !event.composedPath().includes(modalSearchWrapper[0]) &&
    !event.composedPath().includes(btnOpenSearch)
  ) {
    searchModal[0].style.visibility = "hidden";
    searchModal[0].style.opacity = "0";
  }
});
/* click outside */
//! modal search end
