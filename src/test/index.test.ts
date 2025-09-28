// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {donnerAppreciation} from '../index';

describe('Donner une appréciation d’une note\n', () => {
    test('Très faible" si la note est entre 0 et 7', () => {
        expect(donnerAppreciation(5)).toEqual('Très faible');
    });
    
    test('"Moyenne" si la note est entre 8 et 12', () => {
        expect(donnerAppreciation(10)).toEqual('Moyenne');
    });
    
    test('"Bien" si la note est entre 13 et 16', () => {
        expect(donnerAppreciation(15)).toEqual('Bien');
    });
    
    test('"Excellent" si la note est entre 17 et 20', () => {
        expect(donnerAppreciation(18)).toEqual('Excellent');
    });
    
    test('Note invalide" si la valeur saisie est en dehors de [0, 20].', () => {
        expect(donnerAppreciation(25)).toEqual('Note invalide');
    });
});
