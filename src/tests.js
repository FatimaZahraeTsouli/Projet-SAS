import promptSync from 'prompt-sync';
const prompt = promptSync();


// import {normaliserNom , ajouterApprenant,validerResultat, rechercherApprenant} from './fonctions.js'
// console.log(normaliserNom())

// import { enregistrerResultat } from './fonctions.js';
// console.log(enregistrerResultat )

import {filtrerParNiveau } from './fonctions.js';
import { apprenants } from './data.js';
console.log (filtrerParNiveau())

// import { calculerProgression } from './fonctions.js';
// console.log(calculerProgression(apprenants))