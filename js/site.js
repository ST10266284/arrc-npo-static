document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (e) {
            let inputs = form.querySelectorAll("input[required], textarea[required]");
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add("is-invalid");
                } else {
                    input.classList.remove("is-invalid");
                }
            });
            if (!valid) {
                e.preventDefault();
                alert("Please fill out all required fields.");
            }
        });
    });
});