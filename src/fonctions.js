import promptSync from 'prompt-sync';
const prompt = promptSync();
import { apprenants } from './data.js'


//  *****************************1.fonction normalisernom: done**********************************

export function normaliserNom() {
    let nom = prompt("entrez un nom : ")
    let nom1 = nom.trim().toLowerCase()
    return `votre nom est : ${nom1}`
}
// normaliserNom()


// *******************************2.Fonction validerResultat: done*******************************

export function validerResultat() {
    let resultats = {
        jour: parseInt(prompt("entrez jour : "), 10),
        exercicesTermines: parseInt(prompt("entrez nombre d'exercices terminées :"), 10),
        totalExercices: parseInt(prompt("entrez total d'exercices : "), 10),
        challengeTermine: prompt("avez vous terminer votre challenge? (oui/non) :")
    }
    let challenge = resultats.challengeTermine.toLowerCase()
    if (resultats.jour < 1 && resultats.jour > 7) {
        return false
    } if (resultats.totalExercices !== 20) {
        return false
    }
    if (resultats.exercicesTermines > resultats.totalExercices && resultats.exercicesTermines < 0) {
        const totalExercices = 20
        return false
    }
    if (challenge !== "oui" && challenge !== "non") {
        return false
    }
    return resultats
}
// console.log(validerResultat())




// ************************************3.fonction ajouterapprenant: done******************************



export function ajouterApprenant() {
    var nextid = 1
    if (apprenants.length > 0) {
        let maxid = apprenants[0].id
        for (let i = 1; i < apprenants.length; i++) {
            if (apprenants[i].id > maxid) {
                maxid = apprenants[i].id
            }
        }
        nextid = maxid + 1
    }
    const nomComplet = prompt("entrez votre nom Complet : ")
    const ville = prompt("entrez votre ville: ")
    const nouveauApprenant = {
        id: nextid,
        nomComplet: nomComplet,
        ville: ville,
        resultats: []
    }
    apprenants.push(nouveauApprenant)
}
// (ajouterApprenant())
// console.log({apprenants})



// **************************************4.enregistrer resultats:  done*************************************

export function enregistrerResultat(apprenant) {
    let nouveauResultat = validerResultat();
    if (nouveauResultat !== false) {
        let index = apprenant.resultats.findIndex(function (x) {
            return x.jour === nouveauResultat.jour
        })
        if (index !== -1) {
            apprenant.resultats[index] = nouveauResultat;
        } else {
            apprenant.resultats.push(nouveauResultat)
        }
        return apprenant
    }
    console.log("veuillez réessayer s'il vous plait ! ")
}
// const nouveauApprenant = apprenants[0];
// enregistrerResultat(nouveauApprenant)
// console.log(nouveauApprenants.resultats)




// ***********************************5.rechercher apprenant par id : done**************************************



export function rechercherApprenantParid() {
    const id = parseInt(prompt("entrez votre id : "), 10)
    for (let i = 0; i < apprenants.length; i++) {
        if (id === apprenants[i].id) {
            return apprenants[i]
        }
    }
    return ("apprenant n'existe pas, veuillez ajouter vous information d'abord")
}
// const apprenantRecherche = rechercherApprenantParid();
// apprenantRecherche;


// ***************************6.rechercher apprenant par nom : done***********************************



export function rechercherApprenantParnom() {
    const nom = prompt("entrez votre nom: ")
    for (let i = 0; i < apprenants.length; i++) {
        if (nom.toLowerCase() == apprenants[i].nomComplet.toLowerCase()) {
            return apprenants[i]
        }
    }
    return ("apprenant n'existe pas, veuillez ajouter vous information d'abord")
}
// const apprenantRechercher = rechercherApprenantParnom();
// apprenantRechercher;

// *****************************7.calculer progression   undone  !!!!************************************



export function calculerProgression(apprenants) {
    let resultatsProgression = []
    for (let i = 0; i < apprenants.length; i++) {
        let exercicesTermines = 0
        let exercicesProposes = 0
        let challengeTermines = 0
        let progression = 0
        let journéerenseignees = apprenants[i].resultats.length

        for (let resultat of apprenants[i].resultats) {
            exercicesTermines += resultat.exercicesTermines;
            exercicesProposes += resultat.totalExercices;
            if (resultat.challengeTermine === true) {
                challengeTermines++
            }
        }

        if (exercicesProposes > 0) {
            progression = (exercicesTermines / exercicesProposes) * 100
        }
        resultatsProgression.push({
            id: apprenants[i].id,
            nomComplet: apprenants[i].nomComplet,
            exercicesTermines: exercicesTermines,
            exercicesProposes: exercicesProposes,
            challengeTermines: challengeTermines,
            progression: progression,
            journéerenseignees: journéerenseignees
        })
    }

    return calculerProgression
}
// console.log(calculerProgression(apprenants));



// ******************************8.filtrer par niveau  undone  !!!!**************************************
function filtrerParNiveau() {

}
// ***********************************9.trier par progression   undone !!!!*******************************
function trierParProgression() {

}
// ************************************10.afficher tableau de bord   undone !!!!****************************
function afficherTableauDeBord() {

}
// **********************************11.trier apprenants par ordre alphabetique  done*****************************

export function trierParOrdreAlphabetique(apprenants){
      let ordre = [...apprenants]
      ordre.sort(function(a, b){
        return a.nomComplet.localeCompare(b.nomComplet)
      })
      return ordre
}