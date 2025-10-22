const form = document.getElementById("contact-form");
const successMessage = document.getElementById("test-contact-success");
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  subject: document.getElementById("subject"),
  message: document.getElementById("message"),
};

function showError(field, message) {
  const error = document.getElementById(`test-contact-error-${field}`);
  fields[field].classList.add("error");
  error.textContent = message;
}

function clearError(field) {
  const error = document.getElementById(`test-contact-error-${field}`);
  fields[field].classList.remove("error");
  error.textContent = "";
}

function validate() {
  let isValid = true;

  // Full Name
  if (!fields.name.value.trim()) {
    showError("name", "Full name is required.");
    isValid = false;
  } else clearError("name");

  // Email
  const emailValue = fields.email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValue) {
    showError("email", "Email is required.");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  } else clearError("email");

  // Subject
  if (!fields.subject.value.trim()) {
    showError("subject", "Subject is required.");
    isValid = false;
  } else clearError("subject");

  // Message
  const messageValue = fields.message.value.trim();
  if (!messageValue) {
    showError("message", "Message is required.");
    isValid = false;
  } else if (messageValue.length < 10) {
    showError("message", "Message must be at least 10 characters.");
    isValid = false;
  } else clearError("message");

  return isValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    successMessage.style.display = "block";
    form.reset();
  } else {
    successMessage.style.display = "none";
  }
});
