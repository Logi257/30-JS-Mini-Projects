var names = document.getElementById("name-error");
var phone = document.getElementById("phone-error");
var email = document.getElementById("email-error");
var message = document.getElementById("msg-error");
var submit = document.getElementById("submit-error");

function validateName() {
  let fullName = document.getElementById("fname").value.trim();

  if (fullName.length === 0) {
    names.innerHTML = "Name is required";
    return false;
  }

  if (!/^[A-Za-z ]{2,}$/.test(fullName)) {
    names.innerHTML = "Enter a valid name (letters only)";
    return false;
  }

  names.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phoneNumber = document.getElementById("contact-number").value.trim();

  if (phoneNumber.length === 0) {
    phone.innerHTML = "Phone number is required";
    return false;
  }

  if (!/^[0-9]{10}$/.test(phoneNumber)) {
    phone.innerHTML = "Enter a valid 10-digit number";
    return false;
  }

  phone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let emailId = document.getElementById("contact-email").value.trim();

  if (emailId.length === 0) {
    email.innerHTML = "Email is required";
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(emailId)) {
    email.innerHTML = "Invalid email format";
    return false;
  }

  email.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let msg = document.getElementById("contact-msg").value.trim();

  if (msg.length < 15) {
    message.innerHTML = 15 - msg.length + " more characters required";
    return false;
  }

  message.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm(event) {
  // Prevent submission if validation fails
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    event.preventDefault(); // stop submission
    submit.style.display = "block";
    submit.innerHTML = "⚠️ Please fix the error(s) before submitting.";
    setTimeout(function () {
      submit.style.display = "none";
    }, 2500);
    return false;
  }

  return true; // allow submission
}
