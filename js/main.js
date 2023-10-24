import productsFunc from "./products.js";

//! add product to localStorage
//async mantığı js ilk bitecek olan fonksiyonu tamamlıyor
 async function getData() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

const products = localStorage.getItem("products");
console.log(JSON.parse(products));

