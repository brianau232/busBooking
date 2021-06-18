import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChairComponent } from './chair/chair.component';
import { ListChairComponent } from './list-chair.component';



@NgModule({
  declarations: [
    ChairComponent,
    ListChairComponent
  ],
  exports: [ListChairComponent],
  imports: [
    CommonModule,
  ]
})
export class ListChairModule { }
