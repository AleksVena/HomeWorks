import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Inputed } from '../lib/translate.result.type';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent  {

  inputed: Inputed = {word: "sadd"};
  
  constructor(private apiService: ApiService) { }

    loadTranslate() {
      this.apiService
        .getTranslated('абракадабра', 'ru', 'en')
        .pipe()
        .subscribe(
          (res) => {
            console.log(res);
          }
          
        );
    }


}
