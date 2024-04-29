const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const tarefa1 = document.getElementById('um');
const tarefa2 = document.getElementById('dois');
const tarefa3 = document.getElementById('tres');

function ticar1(){
    if(tarefa1.style.backgroundColor ==  ''){
        tarefa1.style.backgroundColor = 'blue';
    }else{
        tarefa1.style.backgroundColor = '';
    }   
}

function ticar2(){
    if(tarefa2.style.backgroundColor ==  ''){
        tarefa2.style.backgroundColor = 'blue';
    }else{
        tarefa2.style.backgroundColor = '';
    }
}

function ticar3(){
    if(tarefa3.style.backgroundColor ==  ''){
        tarefa3.style.backgroundColor = 'blue   ';
    }else{
        tarefa3.style.backgroundColor = '';
    }
}

