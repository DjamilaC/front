
// alert(" coucou");
/* javascript fournit trois operations permettant de comparer des valeurs:
=> l'égalité stricte ( ou identité ou << triple egal>>) utilisant "===", 
=> l'égalité faible ( ou << double égal>>) utilisant ==,
=> Objet.js () ajouté avec ECMAScript 2015*/
// l'operateur de comparaison == signifie 'égale à'
// il permet de vérifier que les valeurs de 2 variables sont identiques.
// var nb1 = 123;
// var nb2= 123;
// console.log( nb1 == nb2);

// l'opérateur de comparaison === signifie 'strictement égal à'
// il permet de vérifier la VALEUR et le type
//  console.log( nb1===nb2);
 // l'opérateur != signifie 'différent de .... en VALEUR'
//  console.log(nb1!=nb2);
 // l'opérateur !== signifie 'strictement différents de.....'
 // en VALEUR et en type
//  console.log( nb1!==nb2); // retourne FALSE

 /*--------------EXERCICE------------------ */
 /* j'arrive sur un espace sécurisé au moyen du prénom et de l'âge
 je dois saisir mon prénom et mon âge pour être authentifié sur le site ( les infos sont en BDD, ici dans mes variables prénom et âges)
 en cas d'echecs une alerte m'informe du problème.
 si tout se passe bien, un message de bienvenue m'acceuille*/

var monPrenom = "djamila";
    monAge = 38;
    var MDP = "Emma2";
 var prenom=  prompt( "veuillez saisir votre prénom");
 var age  = prompt( "veuillez saisir votre age");
var motDePasse= prompt( " saisir le mot de passe");
 
   if( prenom===monPrenom && age===monAge && motDePasse===MDP )
   {alert( " vous etes le bienvenu"); } 
else {   
         alert(" vous n'etes pas authentifié");
         }
   
           
  
  


      