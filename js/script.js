function showAlert() {
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputNumber = document.getElementById("inputNumber");
  const inputMessage = document.getElementById("inputMessage");

  if (
    inputName.value &&
    inputEmail.value &&
    inputNumber.value &&
    inputMessage.value
  ) {
    const contactAlert = document.getElementById("contactAlert");
    contactAlert.innerHTML = `
            <div class="alert alert-light alert-dismissible fade show" role="alert">
                Formulário não disponível no momento, por favor me contate no WhatsApp ou email
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

    inputName.value = "";
    inputEmail.value = "";
    inputNumber.value = "";
    inputMessage.value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function changeColor() {
  const root = document.documentElement;
  const currentBgColor = getComputedStyle(root)
    .getPropertyValue("--primary-bg-color")
    .trim();

  if (currentBgColor === "#d3d3d3") {
    // DarkMode
    root.style.setProperty("--primary-bg-color", "#0b1215");
    root.style.setProperty("--primary-text-color", "#faf9f6");
    document.body.classList.add("dark-mode");

    // Altera borda dos containers
    let formContainer = document.getElementById("form-contain");
    formContainer.classList.remove("border-black");
    formContainer.classList.add("border-white");

    let infoContainer = document.getElementById("info-contain");
    infoContainer.classList.remove("border-black");
    infoContainer.classList.add("border-white");

    // Altera o botão
    let darkModeBtn = document.getElementById("colorBtn");
    darkModeBtn.classList.remove("text-dark");
    darkModeBtn.classList.add("text-white");
  } else {
    // Lightmode
    root.style.setProperty("--primary-bg-color", "#d3d3d3");
    root.style.setProperty("--primary-text-color", "#212529");
    document.body.classList.remove("dark-mode");

    // Altera borda dos containers
    let formContainer = document.getElementById("form-contain");
    formContainer.classList.remove("border-white");
    formContainer.classList.add("border-black");

    let infoContainer = document.getElementById("info-contain");
    infoContainer.classList.remove("border-white");
    infoContainer.classList.add("border-black");

    // Altera o botão
    let darkModeBtn = document.getElementById("colorBtn");
    darkModeBtn.classList.remove("text-white");
    darkModeBtn.classList.add("text-dark");
  }
}
