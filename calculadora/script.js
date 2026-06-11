let somar = document.querySelector("#somar")
let subtracao = document.querySelector("#subtracao")
let divisao = document.querySelector("#divisao")
let multiplicacao = document.querySelector("#multiplicacao")

let resposta = document.querySelector("#resposta")

somar.addEventListener("click", () => {
    let a = Number(document.querySelector("#ValA").value)
    let b = Number(document.querySelector("#ValB").value)

    resposta.innerHTML = a + b
})
subtracao.addEventListener("click", () => {
    let a = Number(document.querySelector("#ValA").value)
    let b = Number(document.querySelector("#ValB").value)

    resposta.innerHTML = a - b
})
divisao.addEventListener("click", () => {
    let a = Number(document.querySelector("#ValA").value)
    let b = Number(document.querySelector("#ValB").value)

    resposta.innerHTML = a / b
})
multiplicacao.addEventListener("click", () => {
    let a = Number(document.querySelector("#ValA").value)
    let b = Number(document.querySelector("#ValB").value)

    resposta.innerHTML = a * b
})