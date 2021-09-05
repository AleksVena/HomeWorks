import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DbService, DefaultLang, Languages } from './db.service';
import { Translate, TranslateResult } from './lib/translate.result.type';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  languages = Languages;

  constructor(private apiService: ApiService, private dbService: DbService) { }

  loadTranslate(word: string) {
    const words = word.split(' ');
    const defaultLang = DefaultLang;
    words.forEach(element => {
      const searchecdWord = this.dbService.list.find(item => item.values.filter(i => i.lang === defaultLang)[0].text.toLowerCase() === element.toLowerCase());
      let id: number = null as any;
      if (searchecdWord) { id = searchecdWord.id } else {
        const last: number = Math.max(...this.dbService.list.map(i => i.id));
        if (last && last > 0) { id = last + 1; }
        else {
          id = 1
        }
        this.dbService.addWord({ id: id, date: new Date(), values: [{ lang: defaultLang, text: element }] });
      }

      this.languages.filter((item: string) => item.toLowerCase() !== defaultLang).forEach((lang: string) => {
        const updatedWord = this.dbService.list.filter(el => el.id === id)[0];
        const translateExist = updatedWord.values.find(word => word.lang === lang);
        if (!translateExist)
          this.apiService
            .getTranslated(element, defaultLang, lang)
            .subscribe(
              (res: TranslateResult) => {
                if (res.responseStatus && res.responseStatus === 200) {
                   this.dbService.updateWord(id, lang, res);
                }
              }
            );
      });
    });
  }

}
