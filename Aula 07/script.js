function exibirNome(){
    let reg = /^[^0-9]*$/
    let nome = document.querySelector('#nome').value

    if(!reg.test(nome)){
        alert("Erro!")
    }
    
    alert(nome)
}

function Somar(){
    let valA = Number(document.querySelector('#ValorA').value)
    let valB = Number(document.querySelector('#ValorB').value)
    alert(valA + valB)
}

function Sub(){
    let valA = Number(document.querySelector('#ValorA').value)
    let valB = Number(document.querySelector('#ValorB').value)
    alert(valA - valB)
}

function Mult(){
    let valA = Number(document.querySelector('#ValorA').value)
    let valB = Number(document.querySelector('#ValorB').value)
    alert(valA * valB)
}

function Div(){
    let valA = Number(document.querySelector('#ValorA').value)
    let valB = Number(document.querySelector('#ValorB').value)
    alert(valA / valB)
}