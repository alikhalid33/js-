document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-question");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            const answer = faq.nextElementSibling;
            const toggle = faq.querySelector(".faq-toggle");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                toggle.textContent = "+";
            } else {
                answer.style.display = "block";
                toggle.textContent = "-";
            }  
        });
    });
});
