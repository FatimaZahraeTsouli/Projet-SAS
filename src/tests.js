import promptSync from 'prompt-sync';
const prompt = promptSync();


import {normaliserNom , ajouterApprenant,validerResultat,} from './fonctions.js'
console.log(normaliserNom())

// import { enregistrerResultat } from './fonctions.js';
// console.log(enregistrerResultat )

// import {afficherTableauDeBord } from './fonctions.js';
// import { apprenants } from './data.js';
// afficherTableauDeBord()

import { filtrerParNiveau } from './fonctions.js';
console.log(filtrerParNiveau())