document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector('.slides');
  const slideImages = document.querySelectorAll('.slides img');

  // Sao chép các ảnh cho đến khi chiều dài đủ để cuộn một nửa
  let totalWidth = 0;
  slideImages.forEach(img => {
      totalWidth += img.width + 10; // 10 là khoảng cách giữa các ảnh (margin-right)
  });

  // Nhân đôi các ảnh để tạo hiệu ứng lặp vô tận
  while (totalWidth < window.innerWidth * 2) { // Gấp đôi chiều rộng màn hình
      slideImages.forEach(img => {
          const clone = img.cloneNode(true);
          slides.appendChild(clone);
          totalWidth += img.width + 10;
      });
  }
});
