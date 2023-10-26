function colorsFunc() {
  const colorsDOM = document.querySelectorAll(".color-wrapper");
  colorsDOM.forEach((item) => {
    item.addEventListener("click", function () {
      colorsDOM.forEach((color) => {
        color.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
}
export default colorsFunc();
