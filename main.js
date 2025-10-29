// Toggle products (Desktop)
const productImage = document.querySelector(".product__image");
const radios = document.querySelectorAll(".product-wrapper-desktop input[type='radio']");
const productImages = ["assets/images/image-product-1.jpg", "assets/images/image-product-2.jpg", "assets/images/image-product-3.jpg", "assets/images/image-product-4.jpg"];

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    if(radio.checked) {
      productImage.src = productImages[index];
    }
  })
})

// Mobile Menu Sidebar
const menuIcon = document.querySelector(".menu__icon");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close");

menuIcon.addEventListener('click', () => {
  overlay.style.display = "flex";
})

closeIcon.addEventListener('click', () => {
  overlay.style.display = "none";
})

// Quantity increment/decrement
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const quantity = document.querySelector(".quantity");
const minimum = 0;
const maximum = 100;

increment.addEventListener('click', () => {
  quantity.value++;
  if(quantity.value > maximum) {
    quantity.value = maximum;
  }
})

decrement.addEventListener('click', () => {
  quantity.value--;
  if(quantity.value < minimum) {
    quantity.value = minimum;
  }
})

quantity.addEventListener('input', () => {
  if(quantity.value < minimum) {
    quantity.value = minimum;
  } else if(quantity.value > maximum) {
    quantity.value = maximum;
  }
})

// Mobile product slider
const radioOverlay = document.querySelectorAll(".product-wrapper-overlay input[type='radio']");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let imgIndex = 0;

function sliderImg(image, next, prev) {
  next.addEventListener('click', () => {
    imgIndex++;
    if(imgIndex >= productImages.length) {
      imgIndex = 0;
    }
    radioOverlay[imgIndex].checked = true;
    image.src = productImages[imgIndex];
  })

  prev.addEventListener('click', () => {
    imgIndex--;
    if(imgIndex < 0) {
      imgIndex = 3;
    }
    image.src = productImages[imgIndex];
    radioOverlay[imgIndex].checked = true;
  })
}

sliderImg(productImage, next, prev);

// Desktop product slider (overlay)
const highlightedImg = document.querySelector(".highlighted-img")
const overlayDesktop = document.querySelector(".overlay-desktop");
const closeOverlay = document.querySelector(".close-overlay-desktop");
const nextDesktop = document.querySelector(".next-desktop");
const prevDesktop = document.querySelector(".prev-desktop");
const body = document.querySelector("body");


  productImage.addEventListener('click', () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    overlayDesktop.style.display = "flex";
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;
  })
  
  sliderImg(highlightedImg, nextDesktop, prevDesktop);

closeOverlay.addEventListener('click', () => {
  overlayDesktop.style.display = "none";
  body.style.overflow = "";
  body.style.paddingRight = "";
})

// Toggle Products (overlay)
radioOverlay.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    if(radio.checked) {
      highlightedImg.src = productImages[index];
      imgIndex = index;
    }
  })
})