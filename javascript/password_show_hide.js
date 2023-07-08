document.addEventListener("DOMContentLoaded", () => {
  const passwordTextField = document.querySelector(
    ".container form .input-container input[type='password']"
  );
  const toggleButton = document.querySelector(
    ".container form .input-container b.fa-solid.fa-eye"
  );

  toggleButton.onclick = () => {
    if (passwordTextField.type === "password") {
      passwordTextField.type = "text";
      toggleButton.classList.remove("fa-eye");
      toggleButton.classList.add("fa-eye-slash");
    } else {
      passwordTextField.type = "password";
      toggleButton.classList.remove("fa-eye-slash");
      toggleButton.classList.add("fa-eye");
    }
  };
});
