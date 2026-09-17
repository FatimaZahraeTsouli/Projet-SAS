import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
let continuer = true;

while (continuer) {
    console.log("\n--- SAS PROGRESS CONSOLE ---");
    console.log("\n1. Afficher le tableau de bord");
    console.log("2. Afficher la liste des apprenants");
    console.log("3. Ajouter un apprenant");
    console.log("4. Consulter un apprenant par identifiant");
    console.log("5. Ajouter ou modifier le resultat d'une journée");
    console.log("6. Rechercher un apprenant par nom");
    console.log("7. Filtrer les apprenants par niveau");
    console.log("8. Trier les apprenants par progression décroissante");
    console.log("9. Trier les apprenants par ordre alphabétique");
    console.log("0. Quitter");

    const choix = prompt("Entrez votre choix (0-9) : ");
}