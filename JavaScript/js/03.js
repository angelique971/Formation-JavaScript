/* ----------------------------------------------------------
            ~ ~ LA CONCATENATION ~ ~
------------------------------------------------------------- */
var debutDePhrase = " Aujourd'hui ";
var dateDuJour = new Date();
var suiteDePhrase =' , sont présentes : ';
var nbApprenantes = 14 ;
var finDePhrase = ' apprenantes.<br> '

/**
 * Nous souhaitons maintenant, grace à la concaténation
 * afficher le tout en une phrase sur notre page !  
 **/
document.write(
     debutDePhrase + dateDuJour.getDate()
                   + '/'
                   + ( dateDuJour.getMonth() + 1 )
                   +'/'
                   + dateDuJour.getFullYear()
                   + suiteDePhrase
                   + nbApprenantes
                   + finDePhrase 
);



/**
 * Ici, notre variable dateDuJour nous donne accès
 * aux fonctions de l'objet date.
 * Grace au point '.' je peux utiliser ces fonctions.
 */