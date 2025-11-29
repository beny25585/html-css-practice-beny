const signUpBox = document.querySelector(".signUpBox");
const successMessege = document.querySelector(".successMessege");
const submitBtn = document.querySelector(".submit");
const dismissBtn = document.querySelector(".dismiss");
const errorMassege = document.querySelector(".errorMessage");
const emailInput = document.querySelector(".email");

function checkValidEmail(input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(input);
}

submitBtn.addEventListener("click", (e) => {
  if (checkValidEmail(emailInput.value)) {
    e.preventDefault();
    successMessege.classList.add("active");
    signUpBox.classList.add("active");
    errorMassege.classList.remove("active");
    return;
  }
  errorMassege.classList.add("active");
  emailInput.classList.add("active");
});

dismissBtn.addEventListener("click", () => {
  successMessege.classList.remove("active");
  signUpBox.classList.remove("active");
});
