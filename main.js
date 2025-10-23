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