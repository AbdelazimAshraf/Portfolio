function copyEmail() {
    const email = document.getElementById("email").textContent.trim();
    const btn = document.getElementById("copyEmailBtn");

    navigator.clipboard.writeText(email).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check text-success"></i>';

        setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 1500);
    });
}

function copyPhone() {
    const phone = document.getElementById("phone").textContent.trim();
    const btn = document.getElementById("copyPhoneBtn");

    navigator.clipboard.writeText(phone).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check text-success"></i>';

        setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 1500);
    });
}

emailjs.init({
    publicKey: "C7-ZD3KnIBXox6LJK",
});

const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
const spinner = document.querySelector(".spinner-border");
const btnText = document.querySelector(".btn-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    spinner.classList.remove("d-none");
    btnText.textContent = "Sending...";

    emailjs
        .send("service_8pw9zeq", "template_u6lrytp", {
            name: document.getElementById("form-name").value,
            email: document.getElementById("form-email").value,
            message: document.getElementById("form-message").value,
        })
        .then(() => {
            feedback.className = "alert alert-success mt-3";
            feedback.textContent = "Thanks for reaching out! I'll get back to you soon.";
            feedback.classList.remove("d-none");

            form.reset();
            form.classList.remove("was-validated");
        })
        .catch((error) => {
            console.error(error);

            feedback.className = "alert alert-danger mt-3";
            feedback.textContent = "Failed to send message. Please try again.";
            feedback.classList.remove("d-none");
        })
        .finally(() => {
            spinner.classList.add("d-none");
            btnText.textContent = "Send Message";
        });
});
