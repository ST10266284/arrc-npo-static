// Particle Animation
document.addEventListener("DOMContentLoaded", () => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach(particle => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 5 + 2;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
    });

    // Form Validation and Submission
    const forms = document.querySelectorAll("form[data-netlify='true']");
    forms.forEach(form => {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

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

            try {
                // Prepare form data for Netlify
                const formData = new FormData(form);
                console.log("Submitting form:", form.getAttribute("name"), Object.fromEntries(formData));

                // Submit to Netlify's form endpoint
                const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                });

                if (response.ok) {
                    console.log("Form submitted successfully:", form.getAttribute("name"));
                    // Show thank-you message
                    const thankYouMessage = form.parentElement.querySelector("#thank-you-message");
                    if (thankYouMessage) {
                        thankYouMessage.classList.remove("d-none");
                        // Reset form
                        form.reset();
                        // Scroll to message
                        thankYouMessage.scrollIntoView({ behavior: "smooth" });
                        // Hide message after 5 seconds
                        setTimeout(() => {
                            thankYouMessage.classList.add("d-none");
                        }, 5000);
                    }
                } else {
                    console.error("Form submission failed:", response.status, response.statusText);
                    alert("There was an error submitting the form. Please try again.");
                }
            } catch (error) {
                console.error("Form submission error:", error);
                alert("There was an error submitting the form. Please try again.");
            }
        });
    });
});