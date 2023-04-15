//Nivel
let tempoMosca 
//lógica mosquito
let largura = 0
let altura = 0
//zero e valor null partindo então do numero 1
let vidas = 1
//Cronometro
let contador = 20
//search busco a concatenação
let nivel = window.location.search
nivel = nivel.replace('?','')
if (nivel === 'dificil') {
    tempoMosca = 1000
}
else if (nivel === 'normal') {
    tempoMosca = 1500
}
else if (nivel === 'chuckNorris') {
    tempoMosca = 750
}
else if (nivel === 'facil'){
    tempoMosca = 3000
}
let tempo = setInterval(() => {
    
    if (contador > 0) {
        contador = contador - 1
        console.log(contador)
        document.getElementById('cronometro').innerHTML = 'Tempo Restante '+ contador
console.log(recupera)
    }
    else {
        window.location.href = '/vitoria.html'
    }
}, 1000);
        
        
        
    

function AjustaPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura,altura)
}

AjustaPalcoJogo()



//Função posição randomica do mosquito
function posicaoRandomica() { 

    //remove mosquito anterior caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if (vidas > 3) {
            window.location.href = 'fimGame.html'
        }
        else {
            document.getElementById('v' + vidas).src = "/imagens/coracao_vazio.png"
            let vid = document.getElementById('v1')
        vidas = vidas + 1
            console.log(vidas)
            console.log(vid)
            
        
        }
    }
    //radon é tipo float vai de 0 ate proximo de 1, portanto é necessário arredondar para baixo no caso aqui.
//a multiplicação faz uma espécie de conversão , podendo ser feito apenas pq se tratan de numeros inferiores a 1
    let positionX = Math.floor(Math.random() * largura ) -90
    let positionY = Math.floor(Math.random() * altura ) -90

    //Operador Ternário (condição ?(simbolo ternário) (valor1):(valor2)))
    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;
    

    console.log(positionX, positionY)

//Criar elemento Html

    let mosquito = document.createElement('img')

    mosquito.src = '/imagens/mosca.png'
    //recebe o resultado da função
    mosquito.className = tamanhoMosquito()+' ' + ladoAleatorio()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    //poderia declarar position absolute pela lógica js
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

//Adiciona um novo nó na arvore DOM
    document.body.appendChild(mosquito)
}

//função que retorna um valor que serve como parametro para determinar a classe mosquito
function tamanhoMosquito() {
    let classe = Math.floor(Math.random() * 3)
    
    switch (classe) {
        case 0:
            //return retorna e para o processo
            return 'mosquito0';
        case 1:
            return 'mosquito1';
        case 2:
            return 'mosquito2';
        
    }
}
function  ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'lado0'
        
        case 1:
            return 'lado1'
    }
}





