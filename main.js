// Toggle products (Desktop)
const productImage = document.querySelector(".product__image");
const radios = document.querySelectorAll("input[type='radio']");
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
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let imgIndex = 0;

next.addEventListener('click', () => {
  imgIndex++;
  if(imgIndex >= productImages.length) {
    imgIndex = 0;
  }
  productImage.src = productImages[imgIndex];
})

prev.addEventListener('click', () => {
  imgIndex--;
  if(imgIndex < 0) {
    imgIndex = 3;
  }
  productImage.src = productImages[imgIndex];
})

