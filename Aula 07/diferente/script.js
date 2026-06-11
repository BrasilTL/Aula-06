let form = document.querySelector("#Formulario")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let profissao = document.querySelector('#profissao').value

    let resposta = document.querySelector('#resposta')

    resposta.innerHTML = `Olá ${nome} ${sobrenome}, você tem ${idade} anos e trabalha como ${profissao}`
})
