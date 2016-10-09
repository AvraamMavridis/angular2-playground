import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import BetActions from '../../actions/bets.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [ BetActions ]
})
export class HeaderComponent implements OnInit {

  private links = [
    {
      name: 'Something'
    },
    {
      name: 'Something2'
    },
    {
      name: 'Something2'
    },
    {
      name: 'Something2'
    },
    {
      name: 'Something2'
    }
  ]

  constructor( private actions: BetActions ) { }

  ngOnInit() {
    console.log(this)
  }

  onClick()
  {
    this.actions.addBet("cool");
  }

}
