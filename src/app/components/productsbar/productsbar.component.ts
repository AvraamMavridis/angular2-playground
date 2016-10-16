import { Component, OnInit } from '@angular/core';
import { config } from '../../config';

@Component({
  selector: 'app-productsbar',
  templateUrl: './productsbar.component.html',
  styleUrls: ['./productsbar.component.sass'],
  providers: [ { provide: 'config', useValue: config }]
})
export class ProductsbarComponent implements OnInit {
  private categories = config.categories;

  constructor() {
    console.log(this.categories)
  }

  ngOnInit() {}

}
