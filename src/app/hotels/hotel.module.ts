import { NgModule } from '@angular/core';
import { HotelListeComponent } from './hotel-liste/hotel-liste.component';
import { HotelDetailComponent } from './hotail-detail/hotel-detail.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';



@NgModule({
  declarations: [HotelDetailComponent,HotelListeComponent,HotelEditComponent],
  imports: [
     SharedModule,HotelRoutingModule
  ]
})
export class HotelModule { }
