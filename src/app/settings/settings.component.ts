import { Component, OnInit } from '@angular/core';
import { DbService, DefaultLang, Languages } from '../db.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  languages = Languages.filter(lang => lang !== DefaultLang);
  selected: string = this.languages[0];
  nbOfWords: number = 5;
  NbOfWords: number[] = [5, 10, 15, 20];

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.dbService.getLanguage().subscribe((res) => {
      this.selected = res;
    });
    this.dbService.getNumberOfWords().subscribe((res) => {
      this.nbOfWords = Number.parseInt(res);
    });
  }

  saveSettings(){
    this.dbService.setLanguage(this.selected);
    this.dbService.setNumberOfWords(this.nbOfWords.toString());
  }

}
