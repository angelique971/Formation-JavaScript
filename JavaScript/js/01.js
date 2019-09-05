//alert('Mon fichier JS fonctionne !');

//Deux slash pour faire un commentaire uniligne

/*
Ici, jen peux faire un commetaire sur plusieurs lignes.
   RACCOURCI :
     -CTRL + :
     -SHIFT + ALT + A
*/

// -- 1 : Déclarer une variable en JS
var prenom;
// -- 2 : Affecter une valeur à la variable "prenom"
prenom='Angélique';
// -- 3: Afficher la meme valeur de ma variable dans la console
console.log(prenom);    

//console.log(Prenom); Uncaught ReferenceError: Prenom is not defined. Car JS est sensible à la casse. Pas d'accent dans les noms de variables.

/*------------------------------------------------~
~~~~~~~~~~LES TYPES DE VARIABLES ~~~~~~~~~~
--------------------------------------------------*/
//--typeof me permet de connaitre le type de la valeur de ma variable
console.log( typeof prenom); //Ma variable "prenom" contient une chaine de caratere (string)

//-- Declaration et affectation d'un nombre
var age = 40;

//-Connaitre son type 
console.log(age);
console.log(typeof age)

//-- Les variables de types FLOAT 
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);


//-- Les booléens ( Vrai / Faux )
var unBoolen = false; //true
console.log(unBoolen);
console.log(typeof unBoolen);  

//--Les contantes: (une antité dont on ne peut pas changer la valeur)

/*La déclaration "const" me permet de créer une constante accessible UNIQUEMENT en lecture.
Sa valeur ne pourra pas etre modifiée par des réaffectations ultérieures.*/

const host = "localhost";
const user = "root";
const password = "mysql";

//Je ne peux pas faire cela//
//user ="Angelique"
//Uncaught TypeError: Assignment to constant variable.

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre); //Petite subtilité, unNombre est ici de type "string" à cause des quotes("") au moment de l'affectation.

//--Pour convertir un nombre entier(Integer, ou Int)
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//--Pour convertir un nombre à virgule (Float)
unNombre= "12.55"
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//--Pour convertir un nombre entier en Float en String 
unNombre = 10;
var unString = unNombre.toString();
console.log (unString);
console.log( typeof unString );

/*------------------------------------------------~
~~~~~~~~~~LA PORTE DES VARIABLES~~~~~~~~~~
--------------------------------------------------*/
//|Les variables déclarées directement à la racine du fichier JS sont appelés : variables GLOBALES. Elles sont disponibles dans l'ensemble de votre document, y compris dans les fonctions.
//| Les variables déclarées à l'intérieur d'une fonction sont appelées : variables LOCALES. Elles sont disponible UNIQUEMENT dans le scope de la fonction.

