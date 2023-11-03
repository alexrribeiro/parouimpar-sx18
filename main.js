console.log("Está funcionando...");

const painel1 = document.querySelector("#par-ou-impar");
const painel2 = document.querySelector("#escolha-numeros");
const resultado = document.querySelector("#resultado");

function escolherParOuImpar(parOuImpar) {
    this.parOuImpar = parOuImpar;
    console.log(parOuImpar);
    painel1.style.display = 'none';
    painel2.style.display = 'block';
    return parOuImpar;
}

function escolherNumero(numeroUsuario) {
    this.numeroUsuario = numeroUsuario;
    console.log(numeroUsuario);
    // ocultar o painel com os números
    // bloquear a escolha de mais de uma opção
    // formatação diferenciada pro número selecionado
    return numeroUsuario;
}