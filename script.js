let images = [
  "assets/images/carousel-image1.jpg,
  "assets/images/carousel-image2.jpg,
  "assets/images/carousel-image3.jpg
];

let carousel = document.querySelector('.carousel img');
let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  carousel.src = images[index];
}

setInterval(changeImage, 3000); 