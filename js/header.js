//! sistem açıklaması
/*ekran küçüldüğünde çıkan menu ikonuna tıkladığımızda css dosyasında -100% olan left'i 0 yapıyoruz.
sidebar açıldıığında içinde yazdığımız close butonuda tıkladığımızda tekrar -100% oluyor.
sidebar açıkken haricinde bir yere bastığımızda kapanması için if için kullandığımız komutta sidebar ve menu ikonu hariç kapatılıcak. */
function sidebarFunc() {
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

  /* click outside start */
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });
  /* click outside end */

  //! home sidebar end
}
//! sistem açıklaması
/* header içindeki search ikonuna bastığımızda css kısmında hidden ve 0 verdiğimiz search model kısmımız visible ve 1 olucak. 
search model içindeki close ikonuna bastığımızda ise hidden ve 0'a geri dönücek. 
son olarak modal search harici bir yere basıp kapatmak istersek modal search div bütün ekranı kapsadığı için sadece bize gözüken alan olan modal-wrapper kısmını alıp orayı harici yapıyoruz.
böylece açtığımız ikon ve modal-wrapper kısmı hariç nereye basarsak kapatır hale gelicek.  */
function searchModalFunc() {
  //! search modal start
  const btnOpenSearch = document.querySelector(".search-button");
  const btnCloseSearch = document.getElementById("close-search");
  const modalSearch = document.getElementsByClassName("modal-search");
  const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

  btnOpenSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
  });

  btnCloseSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
  });

  /* click outside start */
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(modalSearchWrapper[0]) &&
      !e.composedPath().includes(btnOpenSearch)
    ) {
      modalSearch[0].style.visibility = "hidden";
      modalSearch[0].style.opacity = "0";
    }
  });

  /* click outside end */

  //! search modal end
}

function headerFunc() {
  sidebarFunc();
  searchModalFunc();
}

export default headerFunc();
