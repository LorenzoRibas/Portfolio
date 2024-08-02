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
    // Light
    root.style.setProperty("--primary-bg-color", "#0b1215");
    root.style.setProperty("--primary-text-color", "#faf9f6");
  } else {
    // Dark
    root.style.setProperty("--primary-bg-color", "#d3d3d3");
    root.style.setProperty("--primary-text-color", "#212529");
  }
}
