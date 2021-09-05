import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Inputed, ResponseData, Translate } from '../lib/translate.result.type';
import { DbService, DefaultLang, Languages } from '../db.service';
import { TranslateService } from '../translate.service';


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

  constructor(private apiService: ApiService, private dbService: DbService, private translateService: TranslateService) {

  }

  DeleteElement(element: Translate) {
    this.dbService.DeleteElement(element);
  }

  loadTranslate() {
    this.translateService.loadTranslate(this.word);
  }


  nmtds() {
    return new MatTableDataSource<Translate>(this.TranslateList.sort((x, y) => y.id - x.id));
  }

  reloadPage() {
    this.dataSource = this.nmtds();
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dbService.words$.subscribe((res: Translate[]) => {
      this.TranslateList = res;
      this.reloadPage();
    })
    this.dbService.loadList();
  }

  getTextByLang(lang: string, data: Translate) {
    if (!data) return "";
    const item = data.values.filter(i => i.lang === lang);
    if (!item || item.length === 0) return "";
    return item[0].text;
  }

}

