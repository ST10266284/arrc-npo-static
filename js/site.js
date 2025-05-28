// Particle Animation
document.addEventListener("DOMContentLoaded", () => {
    const particles = document.querySelectorAll(".particle");
    if (particles.length === 10) {
        particles.forEach(particle => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const size = Math.random() * 5 + 2; // Random size 2-7px
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            const duration = Math.random() * 20 + 10; // 10-30s
            particle.style.animationDuration = `${duration}s`;
        });
    } else {
        console.error("Expected 10 particles, found:", particles.length);
    }

    // Form Handling
    const forms = document.querySelectorAll("form[id$='-form']");
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

            // Show thank-you message
            const thankYouMessage = form.parentElement.querySelector("#thank-you-message");
            if (thankYouMessage) {
                thankYouMessage.classList.remove("d-none");
                form.reset();
                thankYouMessage.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                    thankYouMessage.classList.add("d-none");
                }, 5000);
            }
        });
    });
});