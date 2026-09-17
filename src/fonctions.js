import promptSync from 'prompt-sync';
const prompt = promptSync();
import { apprenants } from './data.js'


//  ************1.fonction normalisernom: done*****************
//  let nom = prompt("entrez le nom : ")
// export function normaliserNom(){
//     let nom1 = nom.trim().toLowerCase()
//     return `votre nom est : ${nom1}`
//     }
// normaliserNom()


// *****2.Fonction validerResultat: done*******

// export function validerResultat() {
//     let resultats ={
//         jour: parseInt(prompt("entrez jour : "),10),
//         exercicesTermines: parseInt(prompt("entrez nombre d'exercices terminées :"),10),
//         totalExercices: parseInt(prompt("entrez total d'exercices : "),10),
//         challengeTermine :prompt("avez vous terminer votre challenge? (oui/non) :")
//     }
//     let challenge = resultats.challengeTermine.toLowerCase()
//         if (resultats.jour < 1 && resultats.jour > 7) {
//             return false
//         } if (resultats.totalExercices !== 20) {
//             return false
//         }
//         if (resultats.exercicesTermines > resultats.totalExercices && resultats.exercicesTermines <0 ) {
//             const totalExercices = 20
//             return false
//         }
//         if (challenge !== "oui" && challenge !== "non") {
//             console.log("re-entrez 'true' ou 'false'")
//             return false
//         }
//         return true
//     }
// console.log(validerResultat())




// *****************3.fonction ajouterapprenant: done*****************

  

// export function ajouterApprenant(donnees){
//     const nextid = apprenants.length >0 ? Math.max(...apprenants.map(nouveauApprenant=> nouveauApprenant.id))+1 :1
//     const nomComplet= prompt("entrez votre nomComplet : ")
//     const ville = prompt("entrez votre ville: ")
//     const id = nextid
//     const nouveauApprenant ={id , nomComplet, ville}
//     apprenants.push(nouveauApprenant)
// }
// (ajouterApprenant())
// console.log({apprenants})



// *****************************4.enregistrer resultats:  undone*********************************
// import { apprenants } from './data.js'
// export function enregistrerResultat(apprenant, nom, jour, nouveauresultat) {
//     for (let i=0, i< apprenants.length, i++){
//         const nom =prompt("entrez votre nom: ")
//         const jour = prompt("entrez le jour: ")
//         const nouveauresultat= prompt("entrez le resultat: ")


//     }


// }
// ***************************5.rechercher apprenant***********************************
// function rechercherApprenant() {


// }
// rechercherApprenant()
// *****************************6.calculer progression************************************
function calculerProgression() {

}
calculerProgression()
// ******************************7.filtrer par niveau**************************************
function filtrerParNiveau() {

}
// ***********************************8.trier par progression*******************************
function trierParProgression() {

}
// ************************************9.afficher tableau de bord****************************
function afficherTableauDeBord() {

}