import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Translate } from './lib/translate.result.type';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor() { }

  getWordList(): Observable<Translate[]> {
    const dataFromStorage = localStorage.getItem('wordList');
    let TranslateList: Translate[] = [];
    if (dataFromStorage)
      TranslateList = JSON.parse(dataFromStorage);
    return new Observable((observer: Subscriber<Translate[]>) => {
      observer.next(TranslateList);
      observer.complete();
    });
  }

  setWordList(data: Translate[]): Observable<boolean> {
    localStorage.setItem('wordList', JSON.stringify(data));
    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);
      observer.complete();
    });
  }

  getNumberOfWords(): Observable<string> {
    const dataFromStorage = localStorage.getItem('numberOfWords');
    let numberOfWords: string = '5';
    if (dataFromStorage)
      numberOfWords = dataFromStorage;
    return new Observable((observer: Subscriber<string>) => {
      observer.next(numberOfWords);
      observer.complete();
    });
  }

  setNumberOfWords(data: string): Observable<boolean> {
    localStorage.setItem('numberOfWords', data);
    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);
      observer.complete();
    });
  }

  getLanguage(): Observable<string> {
    const dataFromStorage = localStorage.getItem('language');
    let language: string = 'en';
    if (dataFromStorage)
    language = dataFromStorage;
    return new Observable((observer: Subscriber<string>) => {
      observer.next(language);
      observer.complete();
    });
  }

  setLanguage(data: string): Observable<boolean> {
    localStorage.setItem('language', data);
    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);
      observer.complete();
    });
  }

}

export const DefaultLang: string = 'ru';

export const Languages: string[] = [
  'ru', 'en', 'it', 'es', 'ar'
];