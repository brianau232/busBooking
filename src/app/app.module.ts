import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListChairModule} from './list-chair/list-chair.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  ListChairModule,
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
