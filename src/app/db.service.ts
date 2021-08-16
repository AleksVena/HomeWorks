import { Injectable } from '@angular/core';
import { Translate } from './lib/translate.result.type';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor() { }
  TranslateList: Translate[] = [];
}
