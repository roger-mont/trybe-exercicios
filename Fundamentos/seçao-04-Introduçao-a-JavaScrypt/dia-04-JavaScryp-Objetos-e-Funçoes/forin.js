let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' +info.personagem);
info['recorrente'] = 'Sim';

for (let index in info) {
  console.log(index+ ': ' +info[index]);
}

for (let index in info) {
  console.log(index);
}

for (let index in info) {
  console.log(info[index]);
}

let info2 = {
  personagem: 'Tio Patinhas' ,
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178" ,
  nota: 'O ultimo MacPatinhas',
  recorrente: 'Sim'
}

console.log(info.personagem+ ' e ' + info2.personagem);
console.log(info.origem+ ' e ' + info2.origem);
console.log(info.nota+ ' e ' + info2.nota);
console.log('Ambos são recorrentes');