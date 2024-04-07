document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const imageBoxes = document.querySelectorAll(".image-box");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function() {
        const filter = button.dataset.filter;
  
        imageBoxes.forEach(box => {
          if (filter === "all" || box.classList.contains(filter)) {
            box.style.display = "flex";
          } else {
            box.style.display = "none";
          }
        });
      });
    });
  });
  