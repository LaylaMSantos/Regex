const nomeComIPT = document.getElementById("nomeComlpetoInput");
const validarBT = document.getElementById("validarBT");
const saidaUsuario = document.getElementById("saidaRegex");

//Validador de Nome Completo
const nomeCompRegex = /^[a-zA-Z\s]{2,}$/

validarBT.addEventListener("click", (e) => {
    if(nomeCompRegex.test(nomeComIPT.value)){
        saidaUsuario.innerHTML = "Nome Válido"
        saidaUsuario.style.color = "green"
    } else {
        saidaUsuario.innerHTML = "Nome Inválido"
        saidaUsuario.style.color = "red"
    }
})
