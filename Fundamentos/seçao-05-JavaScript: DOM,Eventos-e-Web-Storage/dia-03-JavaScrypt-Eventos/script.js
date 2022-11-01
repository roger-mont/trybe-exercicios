const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Parte 1 //
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysContainer = document.getElementById('days')

for (let i = 0; i < decemberDaysList.length; i++) {
  let data = decemberDaysList[i];
  let dia = document.createElement('li')
  dia.className = 'day'
  dia.innerText = data;
  daysContainer.appendChild(dia)
}

let testeTamanho = document.getElementsByClassName('day').length;
 let testeDias = document.getElementsByClassName('day')

for (let i =0 ; i < testeTamanho ; i++) {
    if (testeDias[i].innerText.includes('24') || testeDias[i].innerText.includes('25') || testeDias[i].innerText.includes('31')){
    testeDias[i].className = 'day holiday' 
} else if (testeDias[i].innerText.includes('4') || testeDias[i].innerText.includes('11') || testeDias[i].innerText.includes('18') || testeDias[i].innerText.includes('25')){
  testeDias[i].className = 'day friday'
} 
}

// Parte 2 //

const button = (Feriados) => {
  let botaoContainer = document.getElementsByClassName('buttons-container')[0];
  let botao = document.createElement('button')
  botao.id = 'btn-holiday'
  botao.innerText = (Feriados)
  botaoContainer.appendChild(botao)
}
console.log(button('Feriados'))