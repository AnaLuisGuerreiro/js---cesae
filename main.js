function mostrarLista(){
    document.write("<ul>")
    for(let i = 1; i <= 10; i++){
    
        document.write("<li>" + i + "</li>")
    }
    
    document.write("</ul>")
}

function corFundo(cor){
    document.body.style.background = cor;
}

function mudarCor(){
    cor = document.getElementById("cor-utilizador").value
    document.body.style.background = cor;
    
}

function mudarCorRadio(){
    radioAmarelo = document.getElementById("cor-radio-amarelo")
    radioVerde = document.getElementById("cor-radio-verde")

    if(radioAmarelo.checked){
        document.body.style.background = radioAmarelo.value;
    } else{
        document.body.style.background = radioVerde.value;
    }
}