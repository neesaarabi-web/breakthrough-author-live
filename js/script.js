// Breakthrough Author Live — small interactions

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle (placeholder nav — expand if real nav links are added later)
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
  }

  // Only one FAQ item open at a time
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Video placeholder click — swap for real embed later
  var videoFrame = document.querySelector('.video-frame');
  if (videoFrame) {
    videoFrame.addEventListener('click', function () {
      videoFrame.querySelector('.video-label').textContent = 'Add your training video embed here';
    });
  }
});
