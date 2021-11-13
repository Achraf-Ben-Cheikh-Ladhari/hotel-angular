import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelDetailComponent } from './hotail-detail/hotel-detail.component';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';
import { HotelListeComponent } from './hotel-liste/hotel-liste.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{path:'hotels/detail/:id',component:HotelDetailComponent,
    canActivate:[HotelDetailGuard]},
     {path:'hotels',component:HotelListeComponent},
     {path:'hotels/edit/:id',component:HotelEditComponent}])
  ],
  exports:[
    RouterModule,
  ]
})
export class HotelRoutingModule { }
