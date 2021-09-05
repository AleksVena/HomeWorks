import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateResult } from './lib/translate.result.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private httpClient: HttpClient) {  }

  getTranslated(text: string, from: string, to: string): Observable<TranslateResult> {
    return this.httpClient.get<TranslateResult>(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}&key=0b1cfac9088aca0e56de`);
  }

}
