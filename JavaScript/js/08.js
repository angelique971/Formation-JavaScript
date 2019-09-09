/*EXERCICE
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
Si il a la majorité légale, alors je lui souhaite la bienvenue,
sinon, je fais une redirection sur Google aprèes lui avoir signalé le soucis.
----------------------------------------------*/


  function majorite (){

    var age = prompt( ",Quel age as-tu ?", '<votre age>');
    console.log ( age );
    console.log ( typeof age );

    var majoriteLegale = 18;

    if (age>= majoriteLegale){
        alert ('Bienvenue !'); 


    } else{
        alert('Vous allez etre redigé vers une autre page ! ');
        window.location.href = "https://www.google.fr";
     }
  }
    majorite();
    
/*----------------------------------------------------------------------*/
    //CORRECTION
//-- 1. Créer une fonction permettant de verifier la majorité d'un utilisateur
const marjoriteLegaleFr = 18;
function monUtilisateurEstMajeur (age) {
  if(age>=18){
    return true;
  } else {
    return false;
  }
}
//-- 2.Je demande à l'utilisateur son age.
const age = parseInt(
  prompt ("Bonjour, quel avez-vous ?","<Saisissez votre age>")
);
//-- 3. Vérification de son age. (condition)
if(monUtilisateurEstMajeur){
  alert(" Bienvenue sur mon site réservé aux majeurs ! ");
} else{

  //-- 4.Redirection en cas d'échec.
  alert(" Vous devez etre majeur pour accéder à ce site ! " );
  document.location.href = "https://google.fr";
}

/* -------------------------------------------------------
     ~ ~ LES OPERATEURS DE COMPARAISONS ~ ~

     L'opérateur de comparaison "==" signifie : Egal à.
     Il permet de vérifier que 2 variables sont identiques.

    L'opérateur de comparaison "===" signifie :  Strictement égal à.
     Il va comparer la valeur, mais aussi le type !

    EXEMPLE
    if ( 14=="14") {} = true
    if ( 14=== "14") {} = false
    if ( 14=== 14) {} = true

    L'opérateur " != " : Différent de.
    L'opérateur " !== " :  Strictement Différent de.

    EXEMPLE
    if ( 12 != 14 ) {} = true
    if ( 12 !== '12' ) {} = true ; Ici, 12 est bien différents
    12 à cause du type.
------------------------------------------------------------ */

/* ----------------------------------------------------------------------
    EXERCICE : 
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

// -- 1. Demander à l'utilisateur son email / mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
const mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la BDD.

// If imbriqué...
if ( email === emailPrompt ) {
    if(mdp === mdpPrompt) {
        alert("Bienvenue " + emailPrompt + " !");
    }
}

// Une seule condition
if ( email === emailPrompt && mdp === mdpPrompt ) {
    // -- 3. Tous est ok, l'utilisateur est authentifié
    alert("Bienvenue " + emailPrompt + " !");
} else {
    // -- 4. Erreur au niveau de l'authentification
    alert("ATTENTION, email / mdp incorrect.");
}

// -- Avec les fonctions
function connexion( emailUser, mdpUser ) {
    if ( email === emailUser && mdp === mdpUser ) {
        return true;
    } else {
        return false;
    }
}

if ( connexion( emailPrompt, mdpPrompt ) ) {
    alert("Bienvenue " + emailPrompt + " !");
} else {
    alert("ATTENTION, email / mdp incorrect.");
}    