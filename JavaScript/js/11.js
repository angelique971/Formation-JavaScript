/* ---------------------------------------------
     ~ ~ LA MANIPULATION DES CONTENUS ☢️ ~ ~
------------------------------------------------ */

//-- 3 facons de créer une fonction :

//1.Création d'une fonction qui s'appelle ' l'
function l (e){
    console.log(e);
}

//2. Identique, sauf aue la fonction est stocké dans une variable 'l'
l= function(e){
    console.log(e);
}

//3. Identique, mais avec des fonctions fléchés ECMA 6.
l = e => console.log(e);

//Je souhaite récupérer mon lien google.
const google = document.getElementById ('google');
l(google);

//-- Maintenant je souhaite accéder aux informations de ce lien.
   //--A: Le lien vers lequel pointe la balise
   l(google.href);

   //--B : L'ID de la balise
   l (google.id);

   //--C : La class de la balise
   l (google.className); 

   //--D : Le texte de la balise
   l(google.textContent);

   //-- Comment faire pour modifier le texte
   google.textContent = 'Mon lien Google';
   l (google.textContent);

   /* ---------------------------------------------
     ~ ~ AJOUTER UN ELEMENT DANS MA PAGE 👩🏾‍🦯 ~ ~
------------------------------------------------ */

// Je crée un élément span que je stocke dans ma constante.
const span = document.createElement ('span');

//Je veux donner un ID
span.id = 'monSpan'

//Donner du texte 
span.textContent = 'mon jolie texte en JS';

//J'ai placé à l'intérieur de la balise google mon span
google.appendChild (span);


/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/
const input = document.createElement ('input');
input.id = 'CestChiant';

// Ajouter le champ input dans le <body> du document.
document.body.appendChild(input);

//Permet d'afficher la valeur du champ 'input'
function afficherLaSaisie(){
    alert(input.value);
}

//Permet de déclarer un écouteurs d'évènements sur le champ input.
input.addEventListener ('change', afficherLaSaisie);


/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

const h1 = document.createElement ('h1');//Création d'un élément h1
const a = document.createElement ('a');//Création d'un élément a

 a.textContent='Les apprenantes sont crevées.. :-(';
 a.href='https://cours.wf3.fr/';

 h1.appendChild( a );//On place la balise "a" dans la balise "h1"
 document.body.appendChild( h1 );//Puisla balise h1 dans la balise "body"

 a.style.color='red';
 a.style.textDecoration = 'none';



