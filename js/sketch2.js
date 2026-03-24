let data;

function preload() {
  data = loadJSON("data.json");
}

function setup() {
  //Chager le corpus
  let smsListe = data.corpus.sms;

  smsListe = shuffle(smsListe);

  //connaître le nbr de sms
  let nbrSms = smsListe.length;
  // console.log("nombre de sms : " + nbrSms);

  //afficher un sms aléatoire :
  let texte = random(smsListe).cont;
  if (typeof texte == "object") {
    texte = texte.__text;
  }
  // console.log(texte);

  //Parcourir toute la liste
  for (let i = 0; i < 500; i++) {
    let smsData = smsListe[i];
    let texte = smsData.cont;

    let tailleMessage = smsData.cont.length;


    if (typeof texte == "object") {
      texte = texte.__text;
    }

    //pour chaque sms on crée une balise p
    let p = createP(texte);

    p.addClass("classUn")

    let aleatoire = int(random(30))

    let div = select('#div');
    let divd = select("#divd")
    let divt = select("#divt")

    print(aleatoire)
    if ( aleatoire == 3 || aleatoire == 4 ||aleatoire == 5 ||aleatoire == 6 ||aleatoire == 7 ||aleatoire == 8 ||aleatoire == 9 ||aleatoire == 10 ||aleatoire == 11 ||aleatoire == 12 ||aleatoire == 13 ||aleatoire == 14 ||aleatoire == 15 ||aleatoire == 16 ||aleatoire == 17 ||aleatoire == 18 ||aleatoire == 19 ||aleatoire == 20 ||aleatoire == 21 ||aleatoire == 22 ||aleatoire == 23 ||aleatoire == 24 ||aleatoire == 25 ||aleatoire == 26 ||aleatoire == 27 ||aleatoire == 28 ||aleatoire == 29 ){
        
    div.child(p)
    p.addClass("interlignageP")
    p.addClass("classUn")
    }   

    if (aleatoire == 1){
        
    divd.child(p)
    p.addClass("classDeux")
    p.addClass("interlignageP2")
    }   

    if (aleatoire == 2){
      divt.child(p)
      p.addClass("classTrois")
    }
  }

}





// let p2 = createP(texte2);
//     let devant = select('#devant');
//     if(aleatoire==1){
//       devant.child(p2)
//     }