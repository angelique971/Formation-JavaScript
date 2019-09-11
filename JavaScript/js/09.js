/* --------------------------------------
     ~ ~ LES BOUCLES 😔😒 ~ ~
----------------------------------------- */
/**
 * Pour i = 0 ; Tant que i est strictement
 * inférieur ou égales à 10 ; alors j'incrémente i de 1.
 */
for( let i =0; i<= 10; i++) {
    document.write ('<p>Instrutions exécutées : <strong> '+ i + '</strong></p>');
}
document.write('<hr>');

let j = 0 ;
/**
 * Tant que j est inférieur à 10;
 * j'exécute ma boucle.
 */
while ( j <= 10) {
    document.write ('<p>Instrutions exécutées : <strong> '+ j + '</strong></p>');
    j++; // -- ATTENTION A NE PAS OUBLIER L'INCREMENTAION !
}
document.write('<hr>');


/* -----------------------
    --- EXERCICE : 
--------------------------*/
const Prenoms = ['Jean', 'Marc', 'Matthieu', 'Paul', 'Luc', 'Hugo', 'Jacques']

for (var p=0 ; p< Prenoms.length; p++) {
    document.write ('<p> Les Apotres : <strong>' + Prenoms[p] + '</strong></p>');
}
document.write('<hr>');

/* -----------------------
    --- CORRECTION : 
--------------------------*/
// Manuellement dans la console 
console.log (Prenoms[0]);
console.log (Prenoms[1]);
console.log (Prenoms[2]);
console.log (Prenoms[3]);
console.log (Prenoms[4]);
console.log (Prenoms[5]);
console.log (Prenoms[6]);
console.log ('--------');

//Automatique avec une boucle
for(let i = 0 ; i <=6 ; i ++) {
    console.log ( Prenoms[i]);
}

//Variante, calcul automatique de la dimension du tableau.
console.log ('-------')
for(let i = 0 ; i < Prenoms.length ; i ++) {
    console.log ( Prenoms[i]);
}



/* ------------------------------------------------------------------------------------
    --- EXERCICE : Addition
    Créer un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9,
    Faire une boucle aui permet d'additionner toutes ces valeurs.
    
    1.Prendre chaque élément séparément
    2.Additionner le 1 avec le 2 et ainsi de suite..
---------------------------------------------------------------------------------------*/



const monTableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//--1.Déclarer une variable permettant de garder en memoire la somme
let resultat = 0 ;
//-- 2.Créer une boucle permettant d'additionner les nombres
for (let i=0; i < monTableau.length ; i++){
    //On sait que i prendra successivement les valeurs de 0...10
    // Comment additionner les valeurs ?
    resultat = (resultat + monTableau[i]);
    resultat+= monTableau[i];
}
 console.log (resultat);


 /*
Exercice : Vos meilleurs choix

    Crée un tableau qui contetient 3 nom d'acteurs
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/

const acteur = [' Stalone ', ' Cruiz ', ' Chan '];
const chiant =[' Premier ', ' Deuxième ', ' Troisième '];
for (let i=0 ; i < acteur.length; i++ ) {
    console.log('i =' +i);
    console.log( acteur[i]);
    console.log ('Le'+ chiant[i]+ ' est '+ acteur[i]);
    console.log ('----')
    
}
document.write('<hr>');
console.clear()
/*
    EXERCICE :
    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/


const mois = (new Date).getMonth() ;
console.log(mois);

const moisDeLannee = [' Jan ', ' Fév ', ' Mars ', ' Avril ', ' Mai ', ' Juin ', ' Juil ', ' Aout ', ' Sep', 'oct ', ' nov ', ' dec '];
 console.log (moisDeLannee [mois]);


 
/* --
CONSIGNE :

A partir du tableau "baseDeDonnees" fourni, vous devez mettre en place un système d'authentification.
Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE,
et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue
avec son nom et prénom (document.write);

En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.
const baseDeDonnees = [
{'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
{'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
{'prenom':'Nathanael','nom':'ORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];

-- */

