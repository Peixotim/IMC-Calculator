const form = document.getElementById('form');
const infos = document.getElementById('infos');
const valueElement = document.getElementById('value');
const descriptionElement = document.getElementById('descricao');

// Função para calcular o IMC
function IMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Evento de submit do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const peso = parseFloat(document.getElementById('peso').value); // parseFloat retorna uma string em numero, o .value e para pegar o valor do input peso
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = IMC(peso, altura);
    let description = '';

    if (imc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (imc >= 18.5 && imc < 24.9) {
        description = 'Parabéns! Você está com o peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
        description = 'Atenção! Você está com sobrepeso.';
    } else if (imc >= 30 && imc < 34,9){
        description = 'Cuidado! Você está com obesidade grau I.';
    }else if(imc >= 35 && imc < 39,9){
        description = 'Cuidado! Você está com obesidade grau II.';
    }else{
        description = 'Cuidado! Você está com obesidade grau III.';
    }

    valueElement.textContent = imc;
    descriptionElement.textContent = description;
    infos.classList.remove('hidden');
    
});