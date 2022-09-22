let visorOperadores = document.querySelector(".operadores")
let visorMemoria = document.querySelector(".memoriaCalculo")

function limpar() {
    return visorOperadores.innerHTML = '', visorMemoria.innerHTML = ''
}

function apagar() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-1)
}

function sete() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '7'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '7'
    }
}
function oito() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '8'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '8'
    }
}
function nove() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '9'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '9'
    }
}
function quatro() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '4'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '4'
    }
}
function cinco() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '5'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '5'
    }
}
function seis() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '6'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '6'
    }
}
function um() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '1'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '1'
    }
}
function dois() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '2'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '2'
    }
}
function tres() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '3'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '3'
    }
}
function zero() {
    if (visorMemoria.innerHTML != '' && visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' '){
        visorOperadores.innerHTML = ''
        visorMemoria.innerHTML = ''
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '0'
    } else {
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '0'
    }
}
function ponto() {
    if (visorOperadores.innerHTML.includes('.') === false){
        return visorOperadores.innerHTML = visorOperadores.innerHTML + '.'
    }
    else if ((visorOperadores.innerHTML.includes('/') === true) ||
    (visorOperadores.innerHTML.includes('-') === true) ||
    (visorOperadores.innerHTML.includes('*') === true) ||
    (visorOperadores.innerHTML.includes('+') === true)){
        if (visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) != ' ') {
            // numeros = visorOperadores.innerHTML.split(" ")
            // numeros[2] = numeros[2] + '.'
            return visorOperadores.innerHTML = visorOperadores.innerHTML + '.'
                    
        }
    }
}

function preparaSoma() {
    // Se não tiver nenhuma opreção em andamento, inicio
    if ((visorOperadores.innerHTML.includes('/') === false) &&
        (visorOperadores.innerHTML.includes('-') === false) &&
        (visorOperadores.innerHTML.includes('*') === false) &&
        (visorOperadores.innerHTML.includes('+') === false)){
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' + '
    }
    // Muda a operação se ja tiver iniciado mas nao concluido
    else if (visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) == ' ') {
        visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-3)
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' + '
    }
    // Separo os numeros e chamos as operações
    else {
        numeros = visorOperadores.innerHTML.split(" ")
        a = numeros[0]
        sinal = numeros[1]
        b= numeros[2]
        if (sinal == '+') return soma(a,b,'+');
        if (sinal == '-') return subtracao(a,b,'+');
        if (sinal == '*') return multiplicacao(a,b,'+');
        if (sinal == '/') return divisao(a,b,'+');
    }    
}

function soma(a,b,novoSinal){
    resultado = Number(a) + Number(b)
    return visorMemoria.innerHTML = a + '+' + b + '=' + resultado,visorOperadores.innerHTML = resultado
}

function preparaSubtracao() {
    // Se não tiver nenhuma opreção em andamento, inicio
    if ((visorOperadores.innerHTML.includes('/') === false) &&
        (visorOperadores.innerHTML.includes('-') === false) &&
        (visorOperadores.innerHTML.includes('*') === false) &&
        (visorOperadores.innerHTML.includes('+') === false)){
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' - '
    }
    // Muda a operação se ja tiver iniciado mas nao concluido
    else if (visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) == ' ') {
        visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-3)
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' - '
    }
    // Separo os numeros e chamos as operações
    else {
        numeros = visorOperadores.innerHTML.split(" ")
        a = numeros[0]
        sinal = numeros[1]
        b= numeros[2]
        if (sinal == '+') return soma(a,b,'-');
        if (sinal == '-') return subtracao(a,b,'-');
        if (sinal == '*') return multiplicacao(a,b,'-');
        if (sinal == '/') return divisao(a,b,'-');
    }    
}

function subtracao(a,b,novoSinal){
    resultado = Number(a) - Number(b)
    return visorMemoria.innerHTML = a + '-' + b + '=' + resultado, visorOperadores.innerHTML = resultado
}

function preparaMultiplicacao() {
    // Se não tiver nenhuma opreção em andamento, inicio
    if ((visorOperadores.innerHTML.includes('/') === false) &&
        (visorOperadores.innerHTML.includes('-') === false) &&
        (visorOperadores.innerHTML.includes('*') === false) &&
        (visorOperadores.innerHTML.includes('+') === false)){
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' * '
    }
    // Muda a operação se ja tiver iniciado mas nao concluido
    else if (visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) == ' ') {
        visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-3)
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' * '
    }
    // Separo os numeros e chamos as operações
    else {
        numeros = visorOperadores.innerHTML.split(" ")
        a = numeros[0]
        sinal = numeros[1]
        b= numeros[2]
        if (sinal == '+') return soma(a,b,'*');
        if (sinal == '-') return subtracao(a,b,'*');
        if (sinal == '*') return multiplicacao(a,b,'*');
        if (sinal == '/') return divisao(a,b,'*');
    }    
}

function multiplicacao(a,b,novoSinal){
    resultado = Number(a) * Number(b)
    return visorMemoria.innerHTML = a + 'x' + b + '=' + resultado, visorOperadores.innerHTML = resultado
}

function preparaDivisao() {
    // Se não tiver nenhuma opreção em andamento, inicio
    if ((visorOperadores.innerHTML.includes('/') === false) &&
        (visorOperadores.innerHTML.includes('-') === false) &&
        (visorOperadores.innerHTML.includes('*') === false) &&
        (visorOperadores.innerHTML.includes('+') === false)){
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' / '
    }
    // Muda a operação se ja tiver iniciado mas nao concluido
    else if (visorOperadores.innerHTML.charAt(visorOperadores.innerHTML.length - 1) == ' ') {
        visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-3)
        return visorOperadores.innerHTML = visorOperadores.innerHTML + ' / '
    }
    // Separo os numeros e chamos as operações
    else {
        numeros = visorOperadores.innerHTML.split(" ")
        a = numeros[0]
        sinal = numeros[1]
        b = numeros[2]
        if (b == 0) return visorOperadores.innerHTML = 'LSD'
        else{if (sinal == '+') return soma(a,b,'/');
        if (sinal == '-') return subtracao(a,b,'/');
        if (sinal == '*') return multiplicacao(a,b,'/');
        if (sinal == '/') return divisao(a,b,'/');}
    }    
}

function divisao(a,b,novoSinal){
    if (b == 0) return visorOperadores.innerHTML = 'LSD'
    else {
        resultado = Number(a) / Number(b)
        return visorMemoria.innerHTML = a + '/' + b + '=' + resultado, visorOperadores.innerHTML = resultado
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