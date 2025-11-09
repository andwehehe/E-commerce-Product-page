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
const overlay = document.querySelector(".overlay-mobile");
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
const validForOverlay = window.matchMedia("(min-width: 890px)");

productImage.addEventListener('click', () => {
  if(validForOverlay.matches) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    overlayDesktop.style.display = "flex";
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;
  }
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

// Cart Overlay
const overlayCart = document.querySelector(".overlay-cart");
const cartIcon = document.querySelector(".cart__icon");

cartIcon.addEventListener('click', () => {
  overlayCart.style.display = "flex";
})

overlayCart.addEventListener('click', () => {
  overlayCart.style.display = "";
})

//Add to cart
const emptyCart = document.querySelector(".empty-cart");
const addToCart = document.querySelector(".add-to-cart");
const yourCart = document.querySelector(".your-cart");

addToCart.addEventListener('click', () => {
  if(!quantity.value || quantity.value == 0 || emptyCart.style.display === "none") {
    return;
  }

  const orderQuantity = quantity.value;
  const totalPrice = quantity.value * 125;

  emptyCart.style.display = "none";

  const addOrder = document.createElement("div");
  addOrder.classList.add("order-info");

  const addButton = document.createElement("button");
  addButton.classList.add("checkout-btn");
  addButton.textContent = "Checkout"

  addOrder.innerHTML = `
      <img src="assets/images/image-product-1-thumbnail.jpg" alt="product-preview" class="ordered-product">
      <div class="order-details">
        <p class="ordered-product-name">Fall Limited Edition Sneakers</p>
        <p class="price">$125.00 x 
          <span class="order-quantity">${orderQuantity}</span> 
          <span class="total-price">$${totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <img src="assets/images/icon-delete.svg" alt="delete icon" class="delete-order">
  `;

  yourCart.appendChild(addOrder);
  yourCart.appendChild(addButton);

  //Quantity Indicator
  const quantityIndicator = document.querySelector(".quantity-indicator");
  quantityIndicator.style.display = "block";
  quantityIndicator.textContent = quantity.value;

  //Remove Order
  const deleteOrder = addOrder.querySelector(".delete-order");
  deleteOrder.addEventListener('click', (event) => {
    event.stopPropagation();
    yourCart.removeChild(addOrder);
    addButton.style.display = "none";
    emptyCart.style.display = "flex";
    quantityIndicator.style.display = "";
  })
})