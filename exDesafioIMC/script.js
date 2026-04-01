let peso = Number(prompt("Por gentileza insira o seu peso"));
let altura = Number (prompt("Por gentieza insira a sua altura"));
let imc

imc = (peso / (altura**2));

if (imc < 18.5) {
    alert (`Veja, seu IMC é: ${imc.toFixed(1)} Cuidado!! Você está abaixo do peso, consulte um nutricionista e siga as orientações apresentadas.`);
}
else if (imc >= 18.5 && imc <= 24.9) {
    alert (`Párabens, seu IMC é ${imc.toFixed(1)} você está no peso ideal`);
} 
else if (imc >= 25 && imc <= 29.9) {
    alert (`Atenção, seu IMC é de ${imc.toFixed(1)} Você está em sobrepeso`);
} 
else if (imc >= 30) {
    alert (`Cuidado!! seu IMC é ${imc.toFixed(1)} consulte urgente um nutricionista e siga as orientações apresentadas`);
}