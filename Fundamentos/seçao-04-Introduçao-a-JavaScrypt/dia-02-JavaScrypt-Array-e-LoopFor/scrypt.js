let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//primerio exercicio//

console.log(numbers[0]); console.log(numbers[1]); console.log(numbers[2]); console.log(numbers[3]); console.log(numbers[4]); console.log(numbers[5]); console.log(numbers[6]); console.log(numbers[7]); console.log(numbers[8]); console.log(numbers[9]);

// segundo exercicio//

let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
console.log(soma);

// terceiro exercicio //

console.log(soma / 10);

// quarto exercicio //

if (soma / 10 > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20');
}

// quinto exercicio //

let maiorValor = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  }
  
}

console.log(maiorValor);

// sexto exercicio //

let verificador = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 > 0) {
    verificador++
  }
  
}

if (verificador > 0) {
  console.log('Existem ' +verificador+ ' numeros impares no array');
}   else {
  console.log('Nenhum valor impar encontrado');
}

// sexto exercicio //

let menorValor = 100;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menorValor) {
      menorValor = numbers[index]
  }
  
}
console.log(menorValor);

// setimo exercicio //

let array = [];
for (let index = 0; index <= 25; index++) {
  array.push(index)
  
}

console.log(array)