var esconder = document.querySelector('#esconder')
var ver = document.querySelector('#mostrar')


esconder.addEventListener('click', function(){
    var senha = document.querySelector('#senha')
    var pass = document.querySelector('.mostrar')
    var texto = document.querySelector('.esconder')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }

    pass.style.display = "block"
    texto.style.display = "none"
})

ver.addEventListener('click', function(){
    var senha = document.querySelector('#senha')
    var pass = document.querySelector('.mostrar')
    var texto = document.querySelector('.esconder')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }

    pass.style.display = "none"
    texto.style.display = "block"
})

var cadastrar = document.querySelector('.container-cadastrar')
var login = document.querySelector('.container-login')
var cadastrarUsuario = document.querySelector('#cadastrar')
var loginUsuario = document.querySelector('#login')

cadastrarUsuario.addEventListener('click', function(){
    login.style.display = "none"
    cadastrar.style.display = "flex"

    console.log("cadastrou")
})

loginUsuario.addEventListener('click', function(){
    login.style.display = "flex"
    cadastrar.style.display = "none"
})

function senha(){
    var s1 = document.querySelector("#pass1")
    var s2 = document.querySelector("#pass2")
    var mensagem = document.querySelector(".mensagem")
    a = String(s1.value)
    b = String(s2.value)

    if(a == b && s1.value.length > 7){
        s1.style.border = "solid 1px rgb(26, 255, 0)"
        s2.style.border = "solid 1px rgb(26, 255, 0)"
        mensagem.style.display = "none"
    }else{
        s1.style.border = "solid 1px red"
        s2.style.border = "solid 1px red"
        mensagem.style.display = "block"
        mensagem.style.color = "red"
    }
}