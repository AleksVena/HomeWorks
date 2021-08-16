import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Inputed, languages, ResponseData, Translate } from '../lib/translate.result.type';


@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent {

  languages = languages;
  TranslateList: Translate[] = [
    { id: 1, date: new Date(), values: [{ lang: "ru", text: "привет" }, { lang: "en", text: "hello" }, { lang: "es", text: "hola" }] }
  ];

  constructor(private apiService: ApiService) { }

  // loadTranslate() {
  //   this.apiService
  //     .getTranslated(this.inputed.word, 'ru', 'en')
  //     .pipe()
  //     .subscribe(
  //       (res) => {
  //         this.result = null as any;
  //         this.result = res.responseData;
  //       }

  //     );
  // }



  displayedColumns: string[] = ['Id', 'Date', ...languages];
  dataSource = new MatTableDataSource<Translate>(this.TranslateList);

  @ViewChild(MatPaginator) paginator: MatPaginator = null as any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getTextByLang(lang: string, data: Translate) {
    if (!data) return "";
    const item = data.values.filter(i => i.lang === lang);
    if (!item || item.length === 0) return "";
    return item[0].text;
  }

}
