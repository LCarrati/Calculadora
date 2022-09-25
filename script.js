let visorOperadores = document.querySelector(".operadores")
let visorMemoria = document.querySelector(".memoriaCalculo")

function limpar() {
    return visorOperadores.innerHTML = '', visorMemoria.innerHTML = ''
}

function apagar() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-1)
}

function validacaoNumero(numero){
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' ' && ((visorOperadores.innerHTML.includes('/') === false) &&
    (visorOperadores.innerHTML.includes('-') === false) &&
    (visorOperadores.innerHTML.includes('*') === false) &&
    (visorOperadores.innerHTML.includes('+') === false))){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + numero
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + numero
    }
}

function validaOperacao(sinal) {
    // Se não tiver nenhuma opreção em andamento, inicio
    if ((visorOperadores.innerHTML.includes(' / ') === false) &&
    (visorOperadores.innerHTML.includes(' - ') === false) &&
    (visorOperadores.innerHTML.includes(' * ') === false) &&
    (visorOperadores.innerHTML.includes(' + ') === false)){
    return visorOperadores.innerHTML = visorOperadores.innerHTML + ' ' + sinal +' '
    }
    // Muda a operação se ja tiver iniciado mas nao concluido
    else if (visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) == ' ') {
        visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-3)
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' ' + sinal + ' '
    }
    // Separo os numeros e chamos as operações
    else {
        numeros = visorOperadores.innerHTML.split(" ")
        a = numeros[0]
        sinalAtual = numeros[1]
        b= numeros[2]
        if (sinalAtual == '+') return soma(a,b);
        if (sinalAtual == '-') return subtracao(a,b);
        if (sinalAtual == '*') return multiplicacao(a,b);
        if (sinalAtual == '/') return divisao(a,b);
    }   
}

function sete() {
    validacaoNumero(7)
    processInput()
}
function oito() {
    validacaoNumero(8)
    processInput()
}
function nove() {
    validacaoNumero(9)
    processInput()
}
function quatro() {
    validacaoNumero(4)
    processInput()
}
function cinco() {
    validacaoNumero(5)
    processInput()
}
function seis() {
    validacaoNumero(6)
    processInput()
}
function um() {
    validacaoNumero(1)
    processInput()
}
function dois() {
    validacaoNumero(2)
    processInput()
}
function tres() {
    validacaoNumero(3)
    processInput()
}
function zero() {
    validacaoNumero(0)
    processInput()
}
function ponto() {
    if (visorOperadores.innerHTML.includes('.') === false ){
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '.'
    }
    else if (visorOperadores.innerHTML.includes('.') === true && ((visorOperadores.innerHTML.includes('/') === true) ||
    (visorOperadores.innerHTML.includes('-') === true) ||
    (visorOperadores.innerHTML.includes('*') === true) ||
    (visorOperadores.innerHTML.includes('+') === true))){
        tempo = []
        tempo = visorOperadores.innerHTML.split(' ')
        if (tempo[2].includes('.') == false){
            return visorOperadores.innerHTML = visorOperadores.innerHTML + '.'
        }
    }
    processInput()
}


function preparaSoma() {
    validaOperacao('+')
}

function soma(a,b){
    resultado = Number((Number(a) + Number(b)).toFixed(3))
    if (resultado > 1999999998){return visorMemoria.innerHTML = 'ERRO', visorOperadores.innerHTML = 'ERRO - NUM MT GRANDE',processInput()}
    else {return visorMemoria.innerHTML = a + '+' + b + '=' + resultado,visorOperadores.innerHTML = resultado, processInput()}    
}

function preparaSubtracao() {
    validaOperacao('-') 
    processInput()
}

function subtracao(a,b){
    resultado = Number((Number(a) - Number(b)).toFixed(3))
    if (resultado > 1999999998){return visorMemoria.innerHTML = 'ERRO', visorOperadores.innerHTML = 'ERRO - NUM MT GRANDE',processInput()}
    else {return visorMemoria.innerHTML = a + '-' + b + '=' + resultado, visorOperadores.innerHTML = resultado, processInput()}
}

function preparaMultiplicacao() {
    validaOperacao('*')
    processInput()
}

function multiplicacao(a,b){
    resultado = Number((Number(a) * Number(b)).toFixed(3))
    if (resultado > 1999999998){return visorMemoria.innerHTML = 'ERRO', visorOperadores.innerHTML = 'ERRO - NUM MT GRANDE',processInput()}
    else {return visorMemoria.innerHTML = a + 'x' + b + '=' + resultado, visorOperadores.innerHTML = resultado, processInput()}
}

function preparaDivisao() {
    validaOperacao('/')
    processInput()
}

function divisao(a,b){
    if (b == 0) return visorOperadores.innerHTML = 'L.S.D.'
    else {
        resultado = Number((Number(a) / Number(b)).toFixed(3))
        if (resultado > 1999999998){return visorMemoria.innerHTML = 'ERRO', visorOperadores.innerHTML = 'ERRO - NUM MT GRANDE',processInput()}
        else {return visorMemoria.innerHTML = a + '/' + b + '=' + resultado, visorOperadores.innerHTML = resultado, processInput()}
    }
}

function igual() {    
    if ((visorOperadores.innerHTML.includes('/') === true) ||
        (visorOperadores.innerHTML.includes('-') === true) ||
        (visorOperadores.innerHTML.includes('*') === true) ||
        (visorOperadores.innerHTML.includes('+') === true)){
            numeros = visorOperadores.innerHTML.split(" ")
            a = numeros[0]
            sinal = numeros[1]
            b = numeros[2]
            if (sinal == '+') return soma(a,b,'+');
            if (sinal == '-') return subtracao(a,b,'-');
            if (sinal == '*') return multiplicacao(a,b,'*');
            if (sinal == '/') return divisao(a,b,'/');
    } else {return 1}
}


document.addEventListener('keydown', (e) => {
    if (e.key == "0") {zero();botaoTeclado('.zero')}
    else if (e.key == "1") {um();botaoTeclado('.um')}
    else if (e.key == "2") {dois();botaoTeclado('.dois')}
    else if (e.key == "3") {tres();botaoTeclado('.tres')}
    else if (e.key == "4") {quatro();botaoTeclado('.quatro')}
    else if (e.key == "5") {cinco();botaoTeclado('.cinco')}
    else if (e.key == "6") {seis();botaoTeclado('.seis')}
    else if(e.key == "7") {sete();botaoTeclado('.sete')}
    else if(e.key == "8") {oito();botaoTeclado('.oito')}
    else if(e.key == "9") {nove();botaoTeclado('.nove')}
    else if(e.key == "+") {preparaSoma();botaoTeclado('.soma')}
    else if(e.key == "-") {preparaSubtracao();botaoTeclado('.subtracao')}
    else if(e.key == "*") {preparaMultiplicacao();botaoTeclado('.multiplicacao')}
    else if(e.key == "/") {preparaDivisao();botaoTeclado('.divisao')}
    else if(e.key == "=") {igual();botaoTeclado('.igual')}
    else if(e.key == "Enter") {e.preventDefault(), document.querySelector('.igual').click();botaoTeclado('.igual')}
    else if(e.key == ".") {ponto();botaoTeclado('.ponto')}
    else if(e.key == "Delete") {limpar();botaoTeclado('.btnLimpar')}
    else if(e.key == "Backspace") {apagar();botaoTeclado('.btnCorrigir')}
});

function botaoTeclado (classe){
    document.querySelector(classe).classList.add('apertado')
    setTimeout(function() { 
        document.querySelector(classe).classList.remove('apertado');
      }, 120)
}

function redimensionarTexto() {
    let fontOperadores = window.getComputedStyle(visorOperadores).fontSize; // Busco o tamnho atual da fonte
    let fontMemoria = window.getComputedStyle(visorMemoria).fontSize; // Busco o tamnho atual da fonte
    if(visorOperadores.clientHeight > 64){ // Se a altura do elemento for maior que 64px 
      visorOperadores.style.fontSize = Number((parseInt(fontOperadores) - 1)) + 'px' // Diminuo 1px do tamanho
      redimensionarTexto(); //rodar a funcao novamente e reduzir em mais 1px o tamanho - fazer isso até que altura > 64
    }
    if(visorMemoria.clientHeight > 32){
        visorMemoria.style.fontSize = Number((parseInt(fontMemoria) - 1)) + 'px' // Diminuo 1px do tamanho
        redimensionarTexto();
  }
}
  
  function processInput() { 
    visorOperadores.style.fontSize = '61px'; // Tamanho padrão da fonte
    visorMemoria.style.fontSize = '23px'; // Tamanho padrão da fonte
    redimensionarTexto();
  }