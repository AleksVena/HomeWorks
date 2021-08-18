import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Inputed, ResponseData, Translate } from '../lib/translate.result.type';
import { DbService, DefaultLang, Languages } from '../db.service';


@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent {

  word: string = '';
  languages = Languages;
  TranslateList: Translate[] = [
    //{ id: 1, date: new Date(), values: [{ lang: "ru", text: "привет" }, { lang: "en", text: "hello" }, { lang: "es", text: "hola" }] },
  ];

  dataSource = this.nmtds();
  displayedColumns: string[] = ['Id', 'Date', ...this.languages];
  @ViewChild(MatPaginator) paginator: MatPaginator = null as any;

  constructor(private apiService: ApiService, private dbService: DbService) {

  }

  loadTranslate() {
    const words = this.word.split(' ');
    const defaultLang = DefaultLang;
    words.forEach(element => {
      const searchecdWord = this.TranslateList.find(item => item.values.filter(i => i.lang === defaultLang)[0].text.toLowerCase() === element.toLowerCase());
      let id: number = null as any;
      if (searchecdWord) { id = searchecdWord.id } else {
        const last: number = Math.max(...this.TranslateList.map(i => i.id));
        if (last && last > 0) { id = last + 1; }
        else {
          id = 1
        }
        this.TranslateList.push({ id: id, date: new Date(), values: [{ lang: defaultLang, text: element }] });
        this.saveToLocalStorage();
      }
      this.reloadPage();

      this.languages.filter(item => item.toLowerCase() !== defaultLang).forEach(lang => {
        const updatedWord = this.TranslateList.filter(el => el.id === id)[0];
        const translateExist = updatedWord.values.find(word => word.lang === lang);
        if (!translateExist)
          this.apiService
            .getTranslated(element, defaultLang, lang)
            .subscribe(
              (res) => {
                if (res.responseStatus && res.responseStatus === 200) {
                  const updatedWord = this.TranslateList.find(el => el.id === id);
                  if (updatedWord) {
                    updatedWord.values.push({ lang: lang, text: res.responseData.translatedText.toLowerCase() });
                    this.saveToLocalStorage();
                    this.reloadPage();
                  }
                }
              }
            );
      });
    });
  }


  nmtds() {
    return new MatTableDataSource<Translate>(this.TranslateList.sort((x, y) => y.id - x.id));
  }

  reloadPage() {
    this.dataSource = this.nmtds();
    this.dataSource.paginator = this.paginator;
  }

  saveToLocalStorage() {
    this.dbService.setWordList(this.TranslateList);
  }

  ngAfterViewInit() {
    this.dbService
    .getWordList()
    .subscribe(
      (res) => {
        this.TranslateList = res;
      }
    );

    this.reloadPage();
  }

  getTextByLang(lang: string, data: Translate) {
    if (!data) return "";
    const item = data.values.filter(i => i.lang === lang);
    if (!item || item.length === 0) return "";
    return item[0].text;
  }

}

