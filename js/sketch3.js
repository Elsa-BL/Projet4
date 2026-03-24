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


    let aleatoire = int(random(3))
    print(aleatoire)
    let Random_taille = int(random(4))

    let aleatoire2 = int(random(3))

    let div = select('#div');
    let divd = select("#divd")
    let divt = select("#divt")

    print(aleatoire)
    if ( aleatoire == 0 ){
        
    div.child(p)
    p.addClass("classUn")
     let c = map(i, 0, smsListe.length, 0, 100);

    p.style("color", "hsl(20, 50%, " + c + "%)");
    }   
    
    

    if (aleatoire == 1){
        
    divd.child(p)
    p.addClass("classDeux")
     let c2 = map(i, 0, smsListe.length, 0, 100);

    p.style("font-size", "200"+(c2*c2));
    }   

    if (aleatoire == 2){
      divt.child(p)
      p.addClass("classTrois")
      if(Random_taille==0){
        p.addClass("taille")
      }
      if(Random_taille==1){
        p.addClass("taille2")
      }
      if(Random_taille==2){
        p.addClass("taille3")
      }
      if(Random_taille==3){
        p.addClass("taille4")
      }
    }
  }

}





// let p2 = createP(texte2);
//     let devant = select('#devant');
//     if(aleatoire==1){
//       devant.child(p2)
//     }