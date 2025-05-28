// Particle Animation
document.addEventListener("DOMContentLoaded", () => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach(particle => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = particle.size;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const duration = Math.random() * 20 + 5;
        particle.style.animationDuration = `${duration}s`;
    });

    // Form Validation and Submission
    let submitted = false;
    window.showThankYou = function (formId) {
        const form = document.getElementById(`${formId}-form`);
        const thankYouMessage = form.parentElement.querySelector("#thank-you-message");
        if (thankYouMessage && submitted) {
            thankYouMessage.classList.remove("d-none");
            form.reset();
            thankYouMessage.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                thankYouMessage.classList.add("d-none");
            }, 5000);
            submitted = false;
        }
    };

    const forms = document.querySelectorAll("form[data-netlify='true']");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Client-side validation
            let isValid = true;
            form.querySelectorAll("input[required], textarea[required]").forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add("is-invalid");
                    isValid = false;
                } else {
                    input.classList.remove("is-invalid");
                }
            });

            if (!isValid) {
                alert("Please fill in all required fields.");
                return;
            }

            // Mark as submitted and submit form
            submitted = true;
            form.submit();
        });
    });
});