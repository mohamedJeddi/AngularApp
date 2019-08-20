import {Contrat} from './Contrat';
import {Role} from './Role';

export class Employe {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    isActif: boolean;
    contrat: Contrat;
    roles: Role[];
}
