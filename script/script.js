var form = document.getElementById('form')
var seu = document.getElementById('seu')
var enviar = document.getElementById('enviar')
var limpar = document.getElementById('limpar')
var categoria = document.getElementById('cate')

function exibirImc (event) {
    event.preventDefault()
    var f = new FormData(this)
    var altura = f.get('altura') / 100
    var massa = f.get('massa')
    var imc = massa / (altura * altura)
    seu.innerHTML = imc.toFixed(2)

    if (imc < 18.5) {
        cate.innerHTML = "magreza"
    }
    else if (imc < 24.9) {
        cate.innerHTML = "normal"
    }
    else if (imc < 29,9) {
        categoria.innerHTML = "sobrepeso grau 1"
    }
    else if (imc < 39,9) {
        categoria.innerHTML = "obesidade grau 2"
    }
    else if (imc > 40) {
        categoria.innerHTML = "obesidade grave grau 3"
    }
}

form.addEventListener("submit", exibirImc)

limpar.addEventListener("click", function() {
    categoria.innerHTML = ""
    seu.innerHTML = ""
})