import promptSync from 'prompt-sync';
const prompt = promptSync();
import { apprenants } from './data.js'


//  *****************************1.fonction normalisernom: done**********************************

export function normaliserNom() {
    let nom = prompt("Entrez Votre Nom : ")
    let nom1 = nom.trim().toLowerCase()
    return `votre Nom est : ${nom1}`
}
// normaliserNom()


// *******************************2.Fonction validerResultat: done*******************************

export function validerResultat() {
    let resultats = {
        jour: parseInt(prompt("entrez jour : "), 10),
        exercicesTermines: parseInt(prompt("Entrez Nombre d'Exercices Terminées :"), 10),
        totalExercices: parseInt(prompt("Entrez Total d'Exercices : "), 10),
        challengeTermine: prompt("Avez Vous Terminer Votre Challenge? (OUI/NON) :")
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
    const nomComplet = prompt("Entrez Votre Nom Complet : ")
    const ville = prompt("Entrez Votre Ville: ")
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
    console.log("Veuillez Réessayer S'Il Vous Plait ! ")
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
    return ("Apprenant n'Existe Pas, Veuillez Ajouter Vous Information d'abord")
}
// const apprenantRecherche = rechercherApprenantParid();
// apprenantRecherche;


// ***************************6.rechercher apprenant par nom : done***********************************



export function rechercherApprenantParnom() {
    const nom = prompt("Entrez Votre Nom: ")
    for (let i = 0; i < apprenants.length; i++) {
        if (nom.toLowerCase() == apprenants[i].nomComplet.toLowerCase()) {
            return apprenants[i]
        }
    }
    return ("Apprenant n'Existe Pas, Veuillez Ajouter Vous Information d'abord")
}
// const apprenantRechercher = rechercherApprenantParnom();
// apprenantRechercher;

// *****************************7.calculer progression   done ************************************



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
            progression = (exercicesTermines / exercicesProposes) * 100 + " %"
        }
        resultatsProgression.push({
            id: apprenants[i].id,
            nomComplet: apprenants[i].nomComplet,
            exercicesTermines: exercicesTermines,
            exercicesProposes: exercicesProposes,
            challengeTermines: challengeTermines,
            progression: progression ,
            journéerenseignees: journéerenseignees
        })
    }

    return resultatsProgression
}
// calculerProgression(apprenants);



// ******************************8.filtrer par niveau  done  **************************************
// lister les apprenants par rapport a leur niveau (solide, en progression, a renforcer)

export function filtrerParNiveau() {
     const NiveauSolide=[]
    const NiveauEnProgression=[]
    const NiveauARenforcer=[]
    const resultatsProgression = calculerProgression(apprenants)
    for (let i=0; i<apprenants.length; i++){
        const progression = Number(resultatsProgression[i].progression.replace(" %", ""))
        if( progression >= 80 ){
            NiveauSolide.push(resultatsProgression[i])
        } else if (progression >= 50 && progression < 80){
            NiveauEnProgression.push(resultatsProgression[i])
        }else {
            NiveauARenforcer.push(resultatsProgression[i])
        }
}
// appeler les apprenants a partir de leur niveau 
          let niveauapprenants = {solide: NiveauSolide ,
            enprogression: NiveauEnProgression,
             arenforcer: NiveauARenforcer
            }
            // return niveauapprenants
    let niveau = prompt("entrez niveau :  ")
    if (niveau === "solide"){
        return niveauapprenants.solide
    } else if (niveau === "enprogression"){
        return niveauapprenants.enprogression
    } else if (niveau === "arenforcer"){
        return niveauapprenants.arenforcer
    } else { 
        return ("choix n'existe pas")
    }
}


// ***********************************9.trier par progression   done *******************************
export function trierParProgression() {
    const trierprogression = calculerProgression(apprenants)
    trierprogression.sort(function(a, b){
        const progressionA = Number(a.progression.replace(" %", ""))
        const progressionB = Number(b.progression.replace(" %", ""))
        return progressionB - progressionA
 
      })
      return trierprogression
}


// ******************************8.classer par niveau  done  **************************************
export function classerParNiveau() {
     const NiveauSolide=[]
    const NiveauEnProgression=[]
    const NiveauARenforcer=[]
    const resultatsProgression = calculerProgression(apprenants)
    for (let i=0; i<apprenants.length; i++){
        const progression = Number(resultatsProgression[i].progression.replace(" %", ""))
        if( progression >= 80 ){
            NiveauSolide.push(resultatsProgression[i])
        } else if (progression >= 50 && progression < 80){
            NiveauEnProgression.push(resultatsProgression[i])
        }else {
            NiveauARenforcer.push(resultatsProgression[i])
        }
}
          let niveauapprenants = {solide: NiveauSolide ,
            enprogression: NiveauEnProgression,
             arenforcer: NiveauARenforcer
            }
            return niveauapprenants
        }


// ************************************10.afficher tableau de bord   undone !!!!****************************
export function afficherTableauDeBord() {
    const resultats = calculerProgression(apprenants)

    console.log("=====================Tableau de Bord========================")
    console.log("Total des Apprenants Est : " + apprenants.length)
    console.log("------------------------------------------------------------")

    let sommeprogression = 0
    for (let resultat of resultats){
        sommeprogression += Number(resultat.progression.replace(" %", ""))
    }
    let moyenneprogression = 0
    if (apprenants.length > 0){
    moyenneprogression = sommeprogression / apprenants.length}

    console.log("Moyenne de Progression :", moyenneprogression.toFixed(2)+ "%")
    console.log("------------------------------------------------------------")

    let nombresolide = 0
    let nombreenprogression = 0
    let nombrearenforcee = 0
    for (let resultat of resultats){
        if (Number(resultat.progression.replace(" %", "")) >= 80){
            nombresolide ++
        } else if (Number(resultat.progression.replace(" %", "")) >=50){
            nombreenprogression ++
        } else {
            nombrearenforcee ++
        }
    }

    console.log("Profile Solide : " + nombresolide)
    console.log("Profile en Progression : " + nombreenprogression)
    console.log("Profile a Renforcer : " + nombrearenforcee)
    console.log("------------------------------------------------------------")

    let trierniveau = classerParNiveau()
    console.log("la liste des apprenants par niveau")
    console.log(trierniveau)
    console.log("------------------------------------------------------------")


















}





























// **********************************11.trier apprenants par ordre alphabetique  done*****************************

export function trierParOrdreAlphabetique(apprenants){
      let ordre = [...apprenants]
      ordre.sort(function(a, b){
        return a.nomComplet.localeCompare(b.nomComplet)
      })
      return ordre
}