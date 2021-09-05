import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { Translate, TranslateResult } from './lib/translate.result.type';
import { LocalStorageService } from 'ngx-webstorage';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private storage: LocalStorageService) {
  }

  private wordsSubject = new Subject<Translate[]>();
  private currentWords: Translate[] = [];

  get words$(): Observable<Translate[]> {
    return this.wordsSubject.asObservable()
      .pipe(
        tap((res: Translate[]) => {
          this.currentWords = res;
          this.setWordList();
        }
        )
      );
  }

  get list(): Translate[] {
    return this.currentWords;
  }

  loadList() {
    const dataFromStorage = this.storage.retrieve('wordList');
    let TranslateList: Translate[] = [];
    if (dataFromStorage)
      TranslateList = JSON.parse(dataFromStorage);
    this.wordsSubject.next(TranslateList);
  }

  addWord(word: Translate) {
    this.currentWords.push(word);
    this.wordsSubject.next(this.currentWords);
  }

  DeleteElement(element: Translate) {
    console.log(' 5 element', element);
    const index = this.currentWords.indexOf(element, 0);
    if (index > -1) {
      this.currentWords.splice(index, 1);
    }
    this.wordsSubject.next(this.currentWords);
  }

  updateWord(id:number, lang: string, res: TranslateResult) {
    const updatedWord = this.currentWords.find(el => el.id === id);
    if (updatedWord) {
      updatedWord.values.push({ lang: lang, text: res.responseData.translatedText.toLowerCase() });
    }
    this.wordsSubject.next(this.currentWords);
  }

  setWordList() {
    this.storage.store('wordList', JSON.stringify(this.currentWords));
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