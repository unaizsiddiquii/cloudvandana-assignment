const imageUrls = [
  "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/03/09/20/02/cat-7840767_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/02/14/18/55/animal-7790230_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/10/17/14/52/kitten-4557097_1280.jpg",
];
let currentIndex = 0;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imageElement = document.getElementById("image");

showImage();

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = imageUrls.length;
  }
  currentIndex = currentIndex - 1;
  showImage();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === imageUrls.length - 1) {
    currentIndex = 0;
    showImage();
    return;
  }
  currentIndex = currentIndex + 1;
  showImage();
});

function showImage() {
  imageElement.src = imageUrls[currentIndex];
}
