window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showButtonWhatsappOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

const header = document.querySelector('header.header')

window.addEventListener('scroll', () => {
  const alturaScrollY = window.scrollY
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 768) {
    if (alturaScrollY < 100) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  } else {
    if (alturaScrollY < 150) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  }
})

const sectionServices = document.getElementById('services');
const card = document.querySelectorAll('.card');

const sectionFoguete = document.getElementById('resultado');
const foguete = document.querySelector('.foguete')


gsap.to(foguete, {
  y: -500,
  x: 70,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: sectionFoguete,
    start: 'center center',
    end: 'center top',
    scrub: true,
  }
})

  AOS.init({
    duration: 1200,
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });