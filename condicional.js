console.log("Hello world!");

let nota = Number(prompt('Qual a nota do aluno?'));

console.log(nota);

// alert("A nota do aluno é: " + nota);
// alert(`A nota do aluno é ${nota}.`);

if (nota >= 6) {
  alert('Parabéns, você foi aprovado!');
}
else if (nota >= 5.5) {
  alert('Parabéns, você foi aprovado, agradeça o sistema.');
}
else {
  alert('Parece que sua nota foi insuficiente, converse com a coordenação.');
}