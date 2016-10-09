import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

export const BET_ACTIONS = {
  ADD: 'ADD'
};


@Injectable()
export default class BetActions
{
  constructor(private ngRedux: NgRedux<any>) {}

  addBet(keyword: string) {
    this.ngRedux.dispatch(this.add(keyword));
  }

  private add(keyword: string) {
    return {
      type: BET_ACTIONS.ADD,
      payload: keyword
    };
  }
}
