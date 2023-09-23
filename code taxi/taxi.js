"use strict"
let nbTaxiPris = 0
let santeMentale = 10;
let nbFeux = 30; // Initialisation du nombre de feux restant.
let radio = ["Anissa", "Cereales", "Fevrier", "Minima", "Konnichiwa"]

for(let i=0;i<30;i++){ //boucle de 30 (lie au feux)
    let musiquePassee = radio[Math.floor(Math.random()*5)]  //musique aléatoire de la radio
    nbFeux--
    if (musiquePassee == radio[0]){  // vérifie si la musique est Anissa
        santeMentale--  //la santée mentale diminue de 1
        nbTaxiPris++  //rajoute 1 taxi de pris
        console.log("John change de taxi à cause de "+musiquePassee+" il reste "+nbFeux+" feux rouge et ça santé est à "+santeMentale);
        if(santeMentale==0){
          console.log("EXPLOSION John a craque") //message si John meurt
          break //permet de stopper la boucle
        }

    }
    
    if(nbFeux != 0 && musiquePassee !=radio[0]){
        console.log("John écoute "+musiquePassee+" il reste "+nbFeux+" feux rouge et ça santé est à "+santeMentale);  //message à chaque feux rouge
    }else if(nbFeux==0){
      console.log("John est arrivé chez lui en "+nbTaxiPris+" taxis"); //message d'arriver
    }

}
