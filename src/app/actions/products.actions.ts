import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

export const PRODUCT_ACTIONS = {
  ADD: 'ADD'
};

@Injectable()
export default class ProductActions
{
  constructor(private ngRedux: NgRedux<any>) {}

  addProduct(product: Product) {
    this.ngRedux.dispatch( this.add(product) );
  }

  private add(product: Product) {
    return {
      type: PRODUCT_ACTIONS.ADD,
      payload: product
    };
  }
}
