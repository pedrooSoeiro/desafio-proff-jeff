let altura = Number(prompt("Digite sua altura (em cm)"));
let peso = Number(prompt("Digite seu peso (em kg)"));

let imc= peso / (altura*altura);
    alert("Seu IMC é " + imc.toFixed(2));
    if (imc < 18.5 ) {
    alert("Você está abaixo do peso");
} else if(imc >= 18.5 && imc <= 24.9){
    alert("Você está com o peso normal");
} else if(imc >= 25 && imc <= 29.9){
    alert("Você está em sobre peso");
} else if(imc > 30.0 ){
    alert("Você está obeso");
} else {
    alert("IMC invalido");
}


