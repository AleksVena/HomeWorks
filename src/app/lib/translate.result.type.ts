export interface ResponseData {
    translatedText: string;
    match: number;
}

export interface Matches {
    id: number;
    segment: string;
    translation: string;
    reference: string;
    match: number;
}

export interface TranslateResult {
    responseStatus: number;
    responseData: ResponseData;
    matches: Matches[];
    responderId: string;
}

export interface Inputed {
    word: string;
}

export interface Data {
    lang: string;
    text: string;
}

export interface Translate {
    id: number;
    date: Date;
    values: Data[]; 
}

export const languages: string[] = [
    'ru', 'en', 'it', 'es', 'ar'
];