import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import rootReducer from './reducers';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { AppState } from './interfaces/AppState';
import { ProductsbarComponent } from './components/productsbar/productsbar.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule }   from '@angular/router';
import { CategoryComponent } from './components/category/category.component';

interface IAppState {};

let InitialState: AppState = {
  products : []
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    ProductsbarComponent,
    MainComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'category/:category', component: MainComponent }
    ])
  ],
  providers: [  ],
  bootstrap:  [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState> ) {
    ngRedux.configureStore(rootReducer, InitialState, [] );
  }
}
