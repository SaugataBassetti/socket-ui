import { Component, OnInit, Input } from '@angular/core';

// import { itemslist } from 'src/app/_models/itemsI';
//import item from '../../../assets/_utils/Card_info.json'

import { titlelist } from 'src/app/_models/I_title';
// import title from '../../../assets/_utils/Card_info.json'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //@Input() childobj_:[];

  constructor() {}
  titles: titlelist[] = [];

  ngOnInit(): void {
    //this.titles=item
  }
}
