window.onload=function calcular(){
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

  var pesoL = pesoT*(1.6/9.8);
  console.log(pesoL);
  document.getElementById('luna').value= pesoL.toFixed(3);

  var pesopluton = pesoT*(0.62/9.8);
  console.log(pesopluton );
  document.getElementById('pluton').value= pesopluton.toFixed(3);

  var pesourano = pesoT*(8.69/9.8);
  console.log(pesourano);
  document.getElementById('urano').value= pesourano.toFixed(3);

  var pesoceceres = pesoT*(0.27/9.8);
  console.log(pesoceceres );
  document.getElementById('ceceres').value= pesoceceres.toFixed(3);

  var pesotitan = pesoT*(1.352/9.8);
  console.log(pesotitan);
  document.getElementById('titan').value= pesotitan.toFixed(3);

}
