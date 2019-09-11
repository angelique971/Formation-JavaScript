
         /* -------------------------------------------|   |------------- *\
        /                                              |   |                \
       /           ~                      LE DOM              ~              \
      /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\
        |                                                                   |
        |   Le DOM est une interface de développement en JS pour HTML.      |
            Grace au DOM, je vais etre en mesure d'accéder/ modifier mon    |
        |   code HTML.                                                      |
        |                                                                   |
        |   L'objet "document": c'est le point d'entrer vers mon            |
        |   contenu HTML.                                                   |   
        |                                                                   |
        |   Chaque page chargédans mon navigateur à un objet "document".    |
        |                                                                   |
        \*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _*/


/**
 * Comment puis-je faire pour récupérer
 * les différentes information de ma page html ?
 */

 //-- document.getElementById() est une fonction qui va permettre de récupérer un élément Html à partir de son identifiant unique : ID.
 const bonjour = document.getElementById('bonjour');
 console.log(bonjour);

 //-- document.getElementsByClassName() est une fonction qui va permettre de récupérer un ou plusieurs éléments (liste) HTML à partir de leur classe.
const contenu = document.getElementsByClassName('contenu');
console.log(contenu);

/*--> ⚠️ Me renvoi un tableau JS avec mes éléments HTML. ⚠️*/

//--document.getElementsByTagName() est une fonction qui va permettre de récupérer un ou plusieurs éléments (liste) HTML à partir de leur balise.
const p =document.getElementsByTagName('p');
console.log( p );

//-- Nous avons également le querySelector :
/*--> https://developper.mozilla.org/fr/docs/WEB/API/Document/querySelector */ 
console.log ( document.querySelector ('#bonjour') );
console.log ( document.querySelectorAll ('.contenu') );
console.log ( document.querySelectorAll ('p') );