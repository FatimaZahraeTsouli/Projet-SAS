import promptSync from 'prompt-sync';
import { apprenants } from './data.js';
import {normaliserNom , ajouterApprenant,validerResultat, rechercherApprenantParid, rechercherApprenantParnom, trierParOrdreAlphabetique, enregistrerResultat} from './fonctions.js'

const prompt = promptSync({ sigint: true });
let continuer = true;

while (continuer) {
    console.log("\n--- SAS PROGRESS CONSOLE ---");
    console.log("\n1. Afficher le tableau de bord");                         !!!
    console.log("2. Afficher la liste des apprenants");
    console.log("3. Ajouter un apprenant");
    console.log("4. Consulter un apprenant par identifiant");
    console.log("5. Ajouter ou modifier le resultat d'une journée");         
    console.log("6. Rechercher un apprenant par nom");
    console.log("7. Filtrer les apprenants par niveau");                     !!
    console.log("8. Trier les apprenants par progression décroissante");     !!
    console.log("9. Trier les apprenants par ordre alphabétique");
    console.log("0. Quitter");

    const choix = prompt("Entrez votre choix (0-9) : ");

switch (choix) {

    case "1":
       
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
        
        break;

    case "8":
       
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