function verificaPalindrome (phrase) {
  let verificador = false;
  let inverso = ''; 
  for (let i = 0; i < phrase.length; i++) {
    inverso = phrase.charAt(i) + inverso;
  }
  if (inverso === phrase) {
    verificador = true; console.log(verificador)
  } else {
    console.log(verificador)
  }
}

verificaPalindrome('arara')

// segundo requisito //

let numbers = [2, 3, 6, 7, 10, 1];
let maiorNumero = 0;
for (let i= 0; i <= numbers.length; i++) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = i
  }
}
console.log(maiorNumero);

// terceiro requisito //

let numbers2 = [2, 4, 6, 7, 10, 0, -3];
let menorNumero = 100000;
for (let i= 0; i <= numbers.length; i++) {
  if (numbers2[i] < menorNumero) {
    menorNumero = i
  }
}
console.log(menorNumero);