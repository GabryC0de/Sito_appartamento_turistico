
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener("scroll", function () {
      let scrollY = window.scrollY;
      let maxOpacityScroll = 200; // Adjust based on when you want it to fade completely

      let opacity = 1 - Math.min(scrollY / maxOpacityScroll, 1);
      document.getElementById("first-view-container").style.opacity = opacity;

      if (opacity === 0) {
          document.getElementById("first-view-container").style.display = "none";
      }
  });
});
