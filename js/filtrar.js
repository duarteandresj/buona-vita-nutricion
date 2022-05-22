let campoFiltro = document.querySelector("#filtrar-tabla");
campoFiltro.addEventListener("input", function () {
  let pacientes = document.querySelectorAll(".paciente");
  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      let tdNombre = paciente.querySelector(".info-nombre");
      let nombre = tdNombre.textContent;
      let expresion= new RegExp(this.value,"i")
      if (!expresion.test(nombre)) {
        paciente.classList.add("invisible");
      } else {
        paciente.classList.remove("invisible");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
});
