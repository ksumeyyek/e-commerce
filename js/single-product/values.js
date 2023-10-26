function valuesFunc() {
  const valuesDOM = document.querySelectorAll(".values-list span");

  valuesDOM.forEach((item) => {
    item.addEventListener("click", function () {
      valuesDOM.forEach((value) => {
        value.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
}
export default valuesFunc();
