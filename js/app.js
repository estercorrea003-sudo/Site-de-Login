var btnEntrar = document.querySelector("#entrar");
var btnInscrevese = document.querySelector("#inscrevese");


var body = document.querySelector("body");

btnEntrar.addEventListener("click", function () {
    body.className = "entrar-js";
});

btnInscrevese.addEventListener("click", function () {
    body.className = "inscreve-se-js";
})
