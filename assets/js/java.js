document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-header button");
  
    accordionButtons.forEach(button => {
      button.addEventListener("click", function () {
        const accordionItem = this.closest(".accordion-item");
        const content = accordionItem.querySelector(".accordion-content");
        const isActive = accordionItem.classList.contains("active");
  
        if (isActive) {
          accordionItem.classList.remove("active");
          content.style.display = "none";
        } else {
          accordionItem.classList.add("active");
          content.style.display = "block";
        }
      });
    });
  });
  