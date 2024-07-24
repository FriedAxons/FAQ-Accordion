// script.js
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const answer = faq.querySelector(".answer");

      if (answer.classList.contains("expanded")) {
        answer.classList.remove("expanded");
        answer.style.maxHeight = "0"; // Set max-height to 0 for collapse
      } else {
        // Collapse any previously expanded answers
        document.querySelectorAll(".answer.expanded").forEach((el) => {
          el.classList.remove("expanded");
          el.style.maxHeight = "0";
        });

        answer.classList.add("expanded");
        answer.style.maxHeight = answer.scrollHeight + "px"; // Adjust max-height to content height
      }
    });
  });
});
