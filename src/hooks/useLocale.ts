import { useState } from 'react';

export default function useLocalize(text: string): string {
    const lang = 'no-no'

    let translations: any = {
        'add': {
            'en-US': 'Add',
            'no-no': 'Legg til'
        },
        'remove': {
            'en-US': 'Remove',
            'no-no': 'Fjern'
        },
        'edit': {
            'en-US': 'Edit',
            'no-no': 'Rediger'
        },
        'save': {
            'en-US': 'Save',
            'no-no': 'Lagre'
        },
        'cancel': {
            'en-US': 'Cancel',
            'no-no': 'Avbryt'
        },
        'delete': {
            'en-US': 'Delete',
            'no-no': 'Slett'
        },
        'brand': {
            'en-US': 'Brand',
            'no-no': 'Merke'
        },
        'model': {
            'en-US': 'Model',
            'no-no': 'Modell'
        },
        'year': {
            'en-US': 'Year',
            'no-no': 'År'
        },
        'price': {
            'en-US': 'Price',
            'no-no': 'Pris'
        },
        'image': {
            'en-US': 'Image',
            'no-no': 'Bilde'
        },
        'color': {
            'en-US': 'Color',
            'no-no': 'Farge'
        }
    }

    let translatedString = String(translations[text.toLowerCase()][lang])
    if (!translatedString) return text
    return translatedString.charAt(0).toUpperCase() + translatedString.slice(1);
}