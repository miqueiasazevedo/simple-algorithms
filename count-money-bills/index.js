/* 
##Desafio
# Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cedulas) onde o valor pode ser decomposto. 
# As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.
#
# Entrada
# Você receberá um valor inteiro.
#
# Saída
# Exiba o valor lido e a quantidade minima de notas de cada tipo necessárias, seguindo a exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha. 
*/

const main = () => {
  let moneyValues = [100, 50, 20, 10, 5, 2, 1];

  for(i=0; i<=5; i++){
    let value = prompt('Digite o valor');

    let valueContainer = document.createElement('div');
    valueContainer.textContent = value;
  
    document.body.appendChild(valueContainer);
  }
};

main();