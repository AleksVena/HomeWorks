export interface ResponseData{
    translatedText: string;
    match: number;
}

export interface Matches{
    id: number;
    segment: string;
    translation: string;
    reference: string;
    match: number;
}

export interface TranslateResult{
    responseStatus: number;
    responseData: ResponseData;
    matches: Matches[];
    responderId: string;    
}

export interface Inputed{
    word: string;
}