function normaliserNom(nom){
    nom=nom.trim().toLowerCase()
    return nom
}
console.log(normaliserNom("  FaTima   "))
// export{normaliserNom}





function validerResultat(resultats){
    if (resultats.jour <0 || resultats.jour >7){
        return false
    } if (resultats.totalExercices !== 20){
         return false
 }
 if  (resultats.exercicesTermines > resultats.totalExercices){
     const totalExercices = 20
    return false                                              
 } 
 if (typeof resultats.challengeTermine !== "boolean"){
    return false
 } 
 return true

}
console.log(validerResultat(
      { jour: 1, exercicesTermines: 12,
        totalExercices: 20, challengeTermine: false }
    ))
    // export{validerResultat}





const apprenants=[
  {
    id: 1,
    nomComplet: "Sara Dev",
    ville: "Nador",
    resultats: [
      { jour: 1, exercicesTermines: 18,
        totalExercices: 20, challengeTermine: true },
      { jour: 2, exercicesTermines: 14,
        totalExercices: 20, challengeTermine: false }
    ]
  },
  {
    id: 2,
    nomComplet: "Yassine Code",
    ville: "Oujda",
    resultats: [
      { jour: 1, exercicesTermines: 12,
        totalExercices: 20, challengeTermine: false }
    ]
  },
  {
    id: 3,
    nomComplet: "fatima zahrae",
    ville: "nador",
    resultats: [
        {jour:1, exercicesTermines:16,
            totalExercices:20, challengeTermine: true
        }
    
    ]
}
];
function ajouterApprenant(nouveauApprenant){
    for (let i=0; i<apprenants.length; i++){
    if(apprenants[i].id === nouveauApprenant.id){
        return("apprenant deja existe")
    }}
        apprenants.push(nouveauApprenant)
        return ("ajouter avec succées")
}
console.log(ajouterApprenant({
    id: 3,
    nomComplet: "fatima zahrae",
    ville: "nador",
    resultats: [
        {jour:1, exercicesTermines:16,
            totalExercices:20, challengeTermine: true}]
        }))







function enregistrerResultat(){

}

function rechercherApprenant(apprenant){


}
rechercherApprenant("id=1")

function calculerProgression(apprenants){

}
console.log(calculerProgression())

function filtrerParNiveau(){

}

function trierParProgression(){

}

function afficherTableauDeBord(){

}