document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const question = faq.querySelector(".question");
      const answer = faq.querySelector(".answer");
      const faqIcon = faq.querySelector(".plus-icon img");

      // console.log("Clicked FAQ:", faq);
      // console.log("Current Icon Source:", faqIcon.src);

      if (answer.classList.contains("expanded")) {
        answer.classList.remove("expanded");
        answer.style.maxHeight = "0";
        question.style.color = "var(--dark-purple)";
        faqIcon.src = "assets/images/icon-plus.svg";
      } else {
        faqs.forEach((item) => {
          const otherAnswer = item.querySelector(".answer");
          const otherIcon = item.querySelector(".plus-icon img");

          if (otherAnswer.classList.contains("expanded")) {
            otherAnswer.classList.remove("expanded");
            otherAnswer.style.maxHeight = "0";
            question.style.color = "var(--dark-purple)";
            otherIcon.src = "assets/images/icon-plus.svg";
          }
        });

        answer.classList.add("expanded");
        answer.style.maxHeight = answer.scrollHeight + "px";
        faqIcon.src = "assets/images/icon-minus.svg";
        question.style.color = "#ad28eb";
      }
    });
  });
});
