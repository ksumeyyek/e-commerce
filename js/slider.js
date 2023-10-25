//! slider start
let slideIndex = 1;

showSlides(slideIndex); // ilk sistem burada başlar buradan showSlides func gider n 1 alır

setInterval(() => {
  //slideIndex o an ne ise ona bir ekleyip 4 sn'de bir döndürücek
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  /* ileri geri butonlarına tanımlandı onlara tıklandığında 0 a yada 2 ye gelicek img değerleri 
fakat başlangıçta 3 kere bastığında değer 3 olucak bu sefer func içindeki if'e giricek. */
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  //dots butonlarına bastığımızda onlara tanımladığımız n değerlerini slideIndexe eşitleyip func içine giriyoruz.
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");
  //console.log(dots);  3
  //console.log(slides.length);  3
  if (n > slides.length) {
    // n 1 olarak buraya gelir u koşulu sağlamaz geçer yada 4 olarak gelicek ve [0]'daki img dönücek
    slideIndex = 1;
  }

  if (n < 1) {
    //n 1 olarak buraya da gelir koşulu sağlamaz geçer
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    //burası ilk önce bütün img itemları yok eder.
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    //bütün classlardaki activelar yerine birşey yazmıcak
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex"; //sonra n'den bağımsız burayı tanımladığımız slideIndex göre işler ve [0] img gelir.
  dots[slideIndex - 1].className += " active"; //sonra slideIndex ne ise o classa active eklicek.
}

//! slider end
