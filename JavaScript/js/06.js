/* -------------------------------
     ~ ~ LES FONCTIONS ~ ~
---------------------------------- */

/**
 * Déclarer une fonction
 * ---------------------
 * Les instruction ne seront exécutées que lorsque ma fonction sera appelée.
 * ---------------------
 */

function bonjour () {
    //--instruction js --
    //--instruction js --
     alert('Bonjour !');
     //--instruction js --
     //--instruction js --
}
/**
 * Ici, notre fonction 'ditBonjour' définie 2 arguments.
 * Au moment de l'executer nous affecterons une valeur 
 * à chaque arguments. Ainsi, prenom sera égal à 'Hugo'
 * et nom sera égal à 'LIEGEARD'.
 */
function ditBonjour( prenom , nom ) {

    console.log(prenom + ' ' + nom);
    document.write(
        'Bonjour <strong>'
            + prenom
            + ' '
            + nom
            + '</strong> !<br>'
    );

}

ditBonjour( 'Hugo', 'LIEGEARD' );
ditBonjour( 'Nia', 'VITALIS' );

/*-------------------------------------------------------------------------------
EXERCICE:
Créez une fonction permettant d'effectuer l'addition de deux nombre (nb1 et nb2).
--------------------------------------------------------------------------------- */


function pomme( nb1, nb2) {
    var resultat = nb1 + nb2;
    return resultat;
}
var resultatDeMaFonction = pomme (50, 5);

console.log(
    'Il y a'
    + resultatDeMaFonction
    +'pommes dans mon jardin'
);


/*-------------------------------------------------------------------------------
EXERCICE:
Créez une fonction permettant d'effectuer le calcul de la TVA d'un montant HT.
Sachant que le taux de la TVA peut varier: 5.5% 8.5% 10% 20%.
Retourner le montant TTC.
--------------------------------------------------------------------------------- */

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (210, 1.085);
console.log(resultat);

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (45, 1.1);
console.log(resultat);

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (45, 1.2);
console.log(resultat);

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (45, 1.055);
console.log(resultat);




/*----------------------------------------------
EXERCICE :
Créez une fonction permettant d'effectuer 
la conversion d'un montant de EURO et DOLLAR US.
------------------------------------------------ */

function ConverteuroToUSD (euro, usd){
    var resultat = (euro * usd);
    return resultat;
}
var resultat = ConverteuroToUSD (210, 1.1035);
console.log(resultat);




