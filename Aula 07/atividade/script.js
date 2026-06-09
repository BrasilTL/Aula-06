let resultado = document.querySelector('#resultado')


function cadastrar(){
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let profissao = document.querySelector('#profissao').value
    return resultado.innerHTML = `Bem vindo ${nome} ${sobrenome}, você tem ${idade} anos e você trabalha como ${profissao}`
}