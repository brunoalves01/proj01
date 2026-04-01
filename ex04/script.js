let compra = Number(prompt ("Por gentileza insira o valor de sua compra."));
let desconto;
let valor;

if (compra >= 100){
    alert ("Parabéns, você ganhou um desconto de 10% na sua compra!");

    desconto = ((compra * 10/ 100)); 
    alert (`O valor a ser descontado é de R$ ${desconto.toFixed(2)}`);

    valor = (compra - desconto)
    alert (`O valor final da sua conta é ${valor.toFixed(2)}`);
} else {
    alert (`Compras de menos de R$100 não possuem desconto. O valor final da sua compra foi de ${compra.toFixed(2)}`);
}