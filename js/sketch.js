let data;
let taille = ["grand", "moyen", "petit"];
let couleur = ["rouge", "vert", "bleu"];
let rotateListe = ["rotate", "AntiRotate"];
let motATrouver = "bonjour"


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

    let colorA = color(60,random(50,150),random(250));
    let aleatoire = int(random(1,3));

    if (aleatoire == 2) {
      print("aleatoire ok")
      p.style("color", colorA);
    }
    // let taille = random(500);
    // p.style("width", taille);

    //on ajoute aléatoirement des classes à ces balises pour les modifiers en css
    p.addClass(random(taille));
    p.addClass(random(couleur));

          if(tailleMessage > 85){
        p.addClass("interlignage");
      }

      if(tailleMessage < 50){
        p.addClass(random(rotateListe));
      }
    }

//  2eme boucle  2eme boucle 2eme boucle 2eme boucle qui vient 
// se placer en dessous de la premiere, mais pas de superposition 

    for (let y = 0; y < 500; y++) {
    let aleatoire  =int(random(5));
    let smsData2 = smsListe[y];
    let texte2 = smsData2.cont;






    if (typeof texte2 == "object") {
      texte2 = texte2.__text;
    }

    //pour chaque sms on crée une balise p2
    let p2 = createP(texte2);
    let devant = select('#devant');
    if(aleatoire==1){
      devant.child(p2)
    }

    p2.addClass("blanc")

    }

  }
