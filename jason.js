
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function negativo()
{

    var negativo = document.getElementById('resultado').innerHTML = "-";
    document.getElementById('resultado').innerHTML = negativo + numero + num;
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        window.alert('[ERRO] Nada para Calcular.')
    }
}
   