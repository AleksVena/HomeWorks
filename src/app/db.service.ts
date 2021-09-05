import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Translate } from './lib/translate.result.type';
import {LocalStorageService} from 'ngx-webstorage'; 

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private storage:LocalStorageService) { }

  getWordList(): Observable<Translate[]> {
    const dataFromStorage = this.storage.retrieve('wordList');
    let TranslateList: Translate[] = [];
    if (dataFromStorage)
      TranslateList = JSON.parse(dataFromStorage);
    return new Observable((observer: Subscriber<Translate[]>) => {
      observer.next(TranslateList);
      observer.complete();
    });
  }

  setWordList(data: Translate[]): Observable<boolean> {
    this.storage.store('wordList', JSON.stringify(data));
    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);
      observer.complete();
    });
  }

  getNumberOfWords(): Observable<string> {
    const dataFromStorage = this.storage.retrieve('numberOfWords');
    let numberOfWords: string = '5';
    if (dataFromStorage)
      numberOfWords = dataFromStorage;
    return new Observable((observer: Subscriber<string>) => {
      observer.next(numberOfWords);
      observer.complete();
    });
  }

  setNumberOfWords(data: string): Observable<boolean> {
    this.storage.store('numberOfWords', data);
    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);
      observer.complete();
    });
  }

  getLanguage(): Observable<string> {
    const dataFromStorage = this.storage.retrieve('language');
    let language: string = 'en';
    if (dataFromStorage)
    language = dataFromStorage;
    return new Observable((observer: Subscriber<string>) => {
      observer.next(language);
      observer.complete();
    });
  }

  setLanguage(data: string): Observable<boolean> {
    this.storage.store('language', data);
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