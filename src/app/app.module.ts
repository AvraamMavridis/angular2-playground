import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import rootReducer from './reducers';
import { ProductlistComponent } from './components/productlist/productlist.component';

interface IAppState {};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState> ) {
    ngRedux.configureStore(rootReducer, {});
  }
}
