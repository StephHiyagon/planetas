function pesoPlanetas(){
  var peso = prompt("Ingrese su peso:");
  mercurio = (peso * 0.39).toFixed(2)
  venus = (peso * 0.87)
  marte = (peso * 0.38)
  jupiter = (peso * 2.55)
  saturno = (peso * 0.93).toFixed(2)
  urano = (peso * 0.99)
  neptuno = (peso * 1.38)
  luna = (peso * 0.17).toFixed(2)
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
