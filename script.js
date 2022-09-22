let visorOperadores = document.querySelector(".operadores")
let visorMemoria = document.querySelector(".memoriaCalculo")

function limpar() {
    return visorOperadores.innerHTML = '', visorMemoria.innerHTML = ''
}

function apagar() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML.slice(0,-1)
}

function sete() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '7'
}
function oito() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '8'
}
function nove() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '9'
}
function quatro() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '4'
}
function cinco() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '5'
}
function seis() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '6'
}
function um() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '1'
}
function dois() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '2'
}
function tres() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '3'
}
function zero() {
    return visorOperadores.innerHTML = visorOperadores.innerHTML + '0'
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
    return visorMemoria.innerHTML = Number(a) + Number(b),visorOperadores.innerHTML = visorMemoria.innerHTML + ' ' + novoSinal + ' '
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
    return visorMemoria.innerHTML = Number(a) - Number(b), visorOperadores.innerHTML = visorMemoria.innerHTML + ' ' + novoSinal + ' '
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
    return visorMemoria.innerHTML = Number(a) * Number(b), visorOperadores.innerHTML = visorMemoria.innerHTML + ' ' + novoSinal + ' '
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
    else {    return visorMemoria.innerHTML = Number(a) / Number(b), visorOperadores.innerHTML = visorMemoria.innerHTML + ' ' + novoSinal + ' '}

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