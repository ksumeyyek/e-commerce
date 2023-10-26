import headerFunc from "./header.js";
import productsFunc from "./products.js";

//! add product to localStorage
(async function (){
  //async mantığı js ilk bitecek olan fonksiyonu tamamlıyor
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc()
})()

//! add cart items to localStorage
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
