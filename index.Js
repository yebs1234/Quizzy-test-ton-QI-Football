// alert("salut JS");
let maVariable = "hello";

console.log(maVariable);

// **les variables**
var unTexte = "voici un texte";

// const= constante
const prenom = "Enock";

// let = variable peut évoluer
// var = vieux Js
let unChiffre = 24;
unChiffre = 22;

let chaine = "je suis l'une chaine de caractères";

let nouvelleChaine =
  "chaine précédente : " + chaine + ". voilà c'était le contenu";

// concatenation vec guillemets altgr+7
let autreConcatenation = `chaine précédente : ${chaine} . voilà c'était le contenu`;

// types de données
let string = "je suis une chaine de caractère";
let number = 24;
let boolen = true;

// tableaau : il y a des crochets
let array = ["je", "suis", 47, true];

// objet : accolades {}
let objet = {
  prenom: "Audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;

// ** les opérateurs**

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 * 5);
// console.log(4 / 5);
// puissances
// console.log(4 ** 5);

// **opérteurs d'affectations **
let total = 0;

total++;

total += 5;
total -= 4;
total *= 3;

console.log(total);

// structure de controle

let x = 2;
let y = 2;

// if (x > y) {
//   alert("YES x plus gros que y");
// } else if (y < x) {
//   alert("y plus grand !");
// } else {
//   alert("ILS SONT EGAUX");
// }

if (x) {
  // console.log("x existe !");
}
// === test l'égalité en type et valeur
if (x === y) {
  // console.log("ils sont égaux");
} else {
  // console.log("pas égaux!");
}

let a = 2;
let b = 2;
// == teste l'égalité de valeur sans prendre en compte le type
if (x == y) {
  console.log("ils sont égaux");
} else {
  console.log("pas égaux!");
}

//  || ou
// && et

if (x < y && x > 1) {
  console.log("oui");
}

// **Les fonctions **
function faireQuelquechose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("calcul terminé");
}
// il faut impérativement appeller la fonction pour qu'elle se joue
// appel de la fonction: faireQuelquechose();

//  fonction flèchée
const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);
addition(432, 254584);

// la portée des variables
let c = 4;
function add2() {
  console.log(c + 2);
}

console.log(c);
