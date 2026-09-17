//  ************fonction normalisernom: done*****************

// import { apprenants } from './data.js'
// export function normaliserNom(apprenant){
//   return apprenants.map(function(apprenant){
//     return apprenant.nom = apprenant.nomComplet.trim().toLowerCase()
//     })
// }
// normaliserNom()


// *****Fonction validerResultat: undone*******

import { apprenants } from './data.js'
export function validerResultat() {
    return apprenants.map(function (apprenants) {
        return apprenants.resultats.map(function(resultats){
        if (resultats.jour >= 0 && resultats.jour <= 7) {
            return true
        } if (resultats.totalExercices == 20) {
            return true
        }
        if (resultats.exercicesTermines < resultats.totalExercices && resultats.exercicesTermines >=0 ) {
            const totalExercices = 20
            return true
        }
        if (typeof resultats.challengeTermine == "boolean") {
            return true
        }
        return false
    
    })})}
console.log(validerResultat())




// *****************fonction ajouterapprenant: done*****************

//   import { apprenants } from './data.js'
// export function ajouterApprenant(nouveauApprenant){
//     for (let i=0; i<apprenants.length; i++){
//     if(apprenants[i].id === nouveauApprenant.id){
//         return("apprenant deja existe")
//     }}
//         apprenants.push(nouveauApprenant)
//         return ("ajouter avec succées")
// }
//(ajouterApprenant())





function enregistrerResultat() {

}

function rechercherApprenant() {


}
rechercherApprenant()

function calculerProgression() {

}
calculerProgression()

function filtrerParNiveau() {

}

function trierParProgression() {

}

function afficherTableauDeBord() {

}