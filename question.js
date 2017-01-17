var convertToCelsius = function(temperature) {
/*/////////////////   CONSIGNE  //////////////////////////////////
Concevoir un algorithme capable de convertir une température de degrés Farenheit en degrés Celsius. 
Pour passer d'une valeur Farenheit à une valeur Celsius, il faut appliquer la règle suivante :
§         Celsius = (Farenheit - 32) * 5/9
L'algorithme doit lire la température en degrés Farenheit, et l'afficher en Farenheit et en Celsius.
*/////////////////////////////////////////////////////////////


    //ici je met mon code ;)

reponse=Math.round((temperature-32)*5/9);
    return reponse;

}

var majeur = function(age) {
/*//////////////////   CONSIGNE  /////////////////////////////////
§	Concevoir un algorithme capable retourner la valeur majeur ou mineur selon l'âge.
§	18 ou plus majeur sinon mineur
§   var age = integer;
*/////////////////////////////////////////////////////////////
    //ici je met mon code ;)
var age=parseInt(age);
if (age>=18){reponse="majeur";}
else{reponse="mineur";}
    return reponse;
/*correction: age >= 18 ? reponse = "majeur" : reponse = "mineur";*/
}
var paye = function(vente) {
/*///////////////////   CONSIGNE  //////////////////////////////// 
§         L'employé reçoit 200$ par semaine comme salaire de base.
§         L'employé reçoit 6% du total des ventes hebdomadaires à prix régulier.
§         L'employé reçoit 3% du total des ventes hebdomadaires à prix rabais.
          var vente = {ventesRegulier : 0, ventesRabais : 0};				
*//////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)


reponse=vente.ventesRegulier*0.06+vente.ventesRabais*0.03+200;
    return reponse;

}
var cesar = function(crypto, chaine) {
/*/////////////////////   CONSIGNE  ////////////////////////////////    
§           On code avec César ;)
§           le mot a codé est dans str 
§           la clée de chiffrage est cle
§			la chaine de caractères utilisé pour codé est dans chaine	
			var crypto = {str : '', cle : 0};	
*////////////////////////////////////////////////////////////////

    //ici je met mon code ;)
	/* for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);*/
/*alert(crypto["cle"]); [16, 34, 2]*/
/*alert(crypto["str"]);["azertyuio (commence à 16 de chaine)", face, aznbvdrftyu (2 norm puis chaine à l'envers)] */
/*alert(chaine) azertyuiopqsdfghjklmwxcbn*/
/*for (var i=0; i<chaine.length; i++) {
alert("Code ASCII de "+chaine.charAt(i)+"="+chaine.charCodeAt(i)+"");} pas fonction positions asciII*/
/*azertyuiopqsdfghjklmwxcvbn 
  12345678911111111112222222
           01234567890123456
  abcdefghijklmnopqrstuvwxyz*/
reponse=new Array();
reponse=chaine.split(crypto[str[1]]);
reponse+=

                                 /* cle    chaine.length
azertyuio +=chaine.charAt(i) où i=16; i>=25; i++
jklmwxcvb
ou chaine.split.crypto["str"]
cookie.split(';');

face +34 positions dans chaine  
xotq

chaine.charAt(i)où i=0; i>=1; i++ et chaine.charAt(i) où i=24; i<=2; i=i-1
az  et  nbvdrftyu*/

    return reponse;
}
