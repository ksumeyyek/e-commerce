//! sistem açıklaması
/*ekran küçüldüğünde çıkan menu ikonuna tıkladığımızda css dosyasında -100% olan left'i 0 yapıyoruz.
sidebar açıldıığında içinde yazdığımız close butonuda tıkladığımızda tekrar -100% oluyor.
sidebar açıkken haricinde bir yere bastığımızda kapanması için if için kullandığımız komutta sidebar ve menu ikonu hariç kapatılıcak. */

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

//! sistem açıklaması
/* header içindeki search ikonuna bastığımızda css kısmında hidden ve 0 verdiğimiz search model kısmımız visible ve 1 olucak. 
search model içindeki close ikonuna bastığımızda ise hidden ve 0'a geri dönücek. 
son olarak modal search harici bir yere basıp kapatmak istersek modal search div bütün ekranı kapsadığı için sadece bize gözüken alan olan modal-wrapper kısmını alıp orayı harici yapıyoruz.
böylece açtığımız ikon ve modal-wrapper kısmı hariç nereye basarsak kapatır hale gelicek.  */
//! modal search start
const btnOpenSearch = document.querySelector(".search-button");
const searchModal = document.getElementsByClassName("modal-search");
const btnCloseSearch = document.querySelector("#close-search-model");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

console.log(searchModal);
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
