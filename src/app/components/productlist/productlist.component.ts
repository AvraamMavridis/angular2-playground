import { Component, OnInit } from '@angular/core';
import ProductActions from '../../actions/products.actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { Product } from 'myapp/interfaces/Product'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.sass'],
  providers: [ ProductActions ]
})
export class ProductlistComponent implements OnInit {

  constructor(private actions : ProductActions) { }

  @select('products') products$ : Observable<Product[]>

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
