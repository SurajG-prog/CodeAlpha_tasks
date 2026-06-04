let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

function openLightbox(img) {
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;

  images = document.querySelectorAll(".gallery img");
  currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  lightboxImg.src = images[currentIndex].src;
}

/* Filter Function */
function filterImages(category) {
  let allImages = document.querySelectorAll(".gallery img");

  allImages.forEach(img => {
    if (category === "all") {
      img.style.display = "block";
    } else {
      img.style.display = img.classList.contains(category) ? "block" : "none";
    }
  });
}