let form = document.querySelector("#Calculadora")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let ValA = Number(document.querySelector('#ValorA').value)
    let ValB = Number(document.querySelector('#ValorB').value)

    let resposta = document.querySelector('#resposta')

    return resposta.innerHTML = ValA + ValB
})
