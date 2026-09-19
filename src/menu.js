import promptSync from 'prompt-sync';
import { apprenants } from './data.js';
import {normaliserNom, ajouterApprenant,validerResultat, rechercherApprenantParid, rechercherApprenantParnom,
     trierParOrdreAlphabetique, enregistrerResultat, filtrerParNiveau, trierParProgression, afficherTableauDeBord} from './fonctions.js'

const prompt = promptSync({ sigint: true });
let continuer = true;

while (continuer) {
    console.log("\n--- SAS PROGRESS CONSOLE ---");
    console.log("\n1 - Afficher le Tableau de Bord");                         !!!
    console.log("2 - Afficher la Liste des Apprenants");
    console.log("3 - Ajouter un Apprenant");
    console.log("4 - Consulter un Apprenant par Identifiant");
    console.log("5 - Ajouter ou Modifier le Resultat d'une Journée");         
    console.log("6 - Rechercher un Apprenant par Nom");
    console.log("7 - Filtrer les Apprenants par Niveau");                     
    console.log("8 - Trier les Apprenants par Progression Décroissante");     
    console.log("9 - Trier les Apprenants par Ordre Alphabétique");
    console.log("0 - Quitter");

    const choix = prompt("Entrez Votre Choix (0-9) : ");

switch (choix) {

    case "1":
        // executé
        afficherTableauDeBord()
        break;

    case "2":
        // executé
        let data = apprenants
        console.log(data)
        break;

    case "3":
        // executé
        ajouterApprenant()
        console.log(apprenants)
        break;

    case "4":
        // executé
        let rechercherparid =  rechercherApprenantParid()
        console.log(rechercherparid)
        break;

    case "5":
        // executé
        let apprenant = rechercherApprenantParid();
        if (typeof apprenant === "object"){
            let resultat = enregistrerResultat(apprenant);
            console.log(resultat);
        } else {
            console.log(apprenant)
        }
        break;

    case "6":
        // executé
        let rechercherparnom =rechercherApprenantParnom(apprenants)
        console.log(rechercherparnom)
        break;

    case "7":
        // executé
        let niveau = filtrerParNiveau()
        console.log(niveau)
        break;

    case "8":
        // executé
       let trier = trierParProgression()
       console.log(trier)
        break;

    case "9":
        // executé
        console.log("case9")
        let ordre = trierParOrdreAlphabetique(apprenants)
        console.log(ordre)
        break;

    case "0":
        // executé
        continuer = false;
        console.log("Au revoir !");
        break;

    default:
        console.log("Choix invalide, veuillez choisir entre 0 et 9.");
}
}