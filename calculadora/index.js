function AdicionaAoDisplay(valor) {
    let display = document.getElementById('display');
    display.value += valor;
}

function calcular() {
    let display = document.getElementById('display');
    // Substituindo '×' por '*' e '÷' por '/'
    let expressao = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    try {
        display.value = eval(expressao);  // Usar eval para realizar o cálculo
    } catch (error) {
        display.value = 'Erro na Expressão';  // Exibe 'Erro' se a expressão for inválida
    }
}

function LimparDisplay() {
    document.getElementById('display').value = '';
}
