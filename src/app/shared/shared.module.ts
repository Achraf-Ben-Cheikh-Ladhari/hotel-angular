import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRatingComponent } from './components/star-rating/star-rating components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StartRatingComponent],
  imports: [
    CommonModule
  ],
  exports: [
  CommonModule,FormsModule,StartRatingComponent,ReactiveFormsModule
  ]
})
export class SharedModule { }
