import { Component, OnInit } from '@angular/core';
import ProductActions from '../../actions/products.actions';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.sass'],
  providers: [ ProductActions ]
})
export class ProductlistComponent implements OnInit {

  constructor(private actions : ProductActions) { }

  ngOnInit() {
  }

  addProduct($event)
  {
    this.actions.addProduct({
      name : 'Whatever',
      category: Math.random() + ''
    })
  }

}
