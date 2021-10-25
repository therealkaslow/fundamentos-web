/*

Case Sensitive(reconhece letras maiusculas e minusculas)

da pra realizar a captura por Id getElementById()
da pra realizar a captura por tag getElementsByTagName()
da pra realizar a captura por nome getElementsByName()
da pra realizar a captura por classe getElementsByClassName()
da pra realizar a captura por Seletor getElementByQuerySelector()
*/
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email") //quando for usar o queryselector sempre utilizar a hashtag
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector('#mapa')
let emailOk = false
let nomeOk = false
let assuntoOk = false


nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso')
    } else {
        alert('Preencha o Formulário Corretamente')
    }

}
function mapaZoom() {
mapa.style.width = '800px'
mapa.style.height = '600px'
}
function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}

