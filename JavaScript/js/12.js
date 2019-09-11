/* --------------------------------------------------------
     ~ ~ LES EVENEMENTS 🔫💣🪓🔪🗡️⚔️⚰️⛏️ ~ ~
     Les evenements vont me permettre de déclencher
     une fonction; c'est-à-dire, une série d'instructions;
     suite à une action de mon utilisateur.

     OBJECTIF : Etre en mesure de capturer ces évènements
     afin d'exécuter une fonction.
     
     Les évènements : MOUSE (Souris)
         
     click          : au clic sur élément;
     dbclick        : au double click;
     mouseenter     : la souris passe au dessus d'un élément;
     mouseleave     : la souris sort de l'élément;
     mouseover      : au passage de la souris;
    
     Les évènements : KEYBOARD (clavier)
    
     keydown        : une touche du clavier est enfoncée;
     keyup          : une touche du clavier a été relacher;
     
     Les évènements : WINDOW (Fenetre)

     scroll         : défilement de fenetre;
     resize         : redimentionnement de la fenetre;
     
     Les évènements : FORM ( Formulaire)

     change         : Pour les éléments <input>, <select> et <textarea>;
     submit         : à l'envoi (soumission) du formulaire;
     input          : pour capter la saisie d'un utilisateur sur le champ <input>;


     #####################LES ECOUTEURS D'EVENEMENTS######################
     Pour attacher un evenement à un élément , ou autrement dit,
     pour déclarer un écouteur d'évenements qui se chargera de 
     déclencher une fonction, je vais utiliser la syntaxe suivante: */

     const p = document.getElementById('monParagraphe');

     function changerLaCouleurEnRouge(){
         p.style.color = "red";
     }
     function changerLaCouleurEnNoir(){
        p.style.color = "black";
    }
     
    // p.addEventListener ('click', changerLaCouleurEnRouge);
    p.addEventListener ('mouseleave', changerLaCouleurEnNoir);
    p.addEventListener ('mouseover', changerLaCouleurEnRouge);

