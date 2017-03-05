function pesoPlanetas(){
  var peso = prompt("Ingrese su peso:");
  document.getElementById('pesoTierra').value=peso;
  mercurio = (peso * 2.8/9.8).toFixed(2);
  venus = (peso * 8.9/9.8).toFixed(2);
  marte = (peso * 3.7/9.8).toFixed(2);
  jupiter = (peso * 22.9/9.8).toFixed(2);
  saturno = (peso * 9.1/9.8).toFixed(2)
  urano = (peso * 7.8/9.8).toFixed(2);
  neptuno = (peso * 11.0/9.8).toFixed(2);
  luna = (peso * 1.6/9.8).toFixed(2)
  alert ("Recuerda que el peso y la masa de un cuerpo no son lo mismo, "+
                    "así que dado tu peso en el planeta Tierra, tu peso en otros " +
                    "planetas serán los siguientes:" + "\n" +"\n" +
                    "En Mercurio: " + mercurio + "\n" +
                    "En Venus: " + venus + "\n" +
                    "En Marte: " + marte + "\n" +
                    "En Jupiter: " + jupiter + "\n" +
                    "En Saturno: " + saturno + "\n" +
                    "En Urano: " + urano + "\n" +
                    "En Neptuno: " + neptuno + "\n" +
                    "Yapa: " + "\n" +
                    "En la Luna: " + luna  );
}

pesoPlanetas();
