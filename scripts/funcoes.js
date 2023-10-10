function calcular() {
    
    
    event.preventDefault();//parar o submit do formulário

    //criar uma variável para cada número
    let n1 = parseFloat(document.getElementById('n1').value);//campo 1
    let n2 = parseFloat(document.getElementById('n2').value);//campo 2
    let op = document.getElementById('operacao').value;//valor selecionado no select
    let resultado;//undefined

    if( isNaN(n1) || isNaN(n2))
    {
        alert("preencha todos os campos");
        return;
    }

    if (op == '+') {
        resultado = somar(n1, n2);

    }
    else if (op == '-') {
        resultado = subtrair(n1, n2);

    }
    else if (op == '*') {
        resultado = multiplicar(n1, n2);

    }
    else if (op == '/') {


        resultado = dividir(n1, n2);

    }




    document.getElementById('resultado').innerText = resultado;



}

function somar(x, y) {
    return (x + y).toFixed(2);
}

function subtrair(x, y) {
    return (x - y).toFixed(2);
}

function multiplicar(x, y) {
    return(x * y).toFixed(2);
}
function dividir(x, y) {
    if (y == 0) {
        return "não é possivel dividir por zero!";
    }

    return (x / y).toFixed(2);


}

