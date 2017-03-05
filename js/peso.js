function calcular(){
  var pesoT=document.getElementById('pesoTierra').value;

  var pesoV = pesoT*(8.9/9.8);
  console.log(pesoV);
  document.getElementById('pesoVenus').value= pesoV.toFixed(3);

  var pesoMerc = pesoT*(2.8/9.8);
  console.log(pesoMerc);
  document.getElementById('pesoMer').value= pesoMerc.toFixed(3);

  var pesoMar = pesoT*(3.7/9.8);
  console.log(pesoMar);
  document.getElementById('pesoMar').value= pesoMar.toFixed(3);

  var pesoJ = pesoT*(22.9/9.8);
  console.log(pesoJ);
  document.getElementById('pesoJ').value= pesoJ.toFixed(3);

  var pesoS = pesoT*(9.1/9.8);
  console.log(pesoS);
  document.getElementById('pesoS').value= pesoS.toFixed(3);

  var pesoU = pesoT*(7.8/9.8);
  console.log(pesoU);
  document.getElementById('pesoU').value= pesoU.toFixed(3);

  var pesoN = pesoT*(11.0/9.8);
  console.log(pesoN);
  document.getElementById('pesoN').value= pesoN.toFixed(3);
}
