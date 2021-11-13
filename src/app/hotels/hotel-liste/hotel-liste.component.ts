import { Component, OnInit } from '@angular/core';
import {IHotel} from '../shared/models/hotel';
import { HotelListService } from '../shared/service/hotel-list-service';
@Component({
  selector: 'app-hotel-liste',
  templateUrl: './hotel-liste.component.html',
  styleUrls: ['./hotel-liste.component.css']
})
export class HotelListeComponent implements OnInit {
  public title='Hotel List !';
  public hotels:IHotel[]=[];
  public showBadge: boolean=false;
  private _hotelfiltre='';
  public receivedRating:string='';
  public errMsg:string='';
  public toggleIsNewBadge():void{
    this.showBadge= !this.showBadge;
  }
  
  public receiveRatingClicked(msg:string):void{
    alert(this.receivedRating=msg);
  }
  public filtredHotel:IHotel[]=[];
  get hotelfiltre():string{
    return this._hotelfiltre;
  }
  set hotelfiltre(filtre:string) {
     this._hotelfiltre=filtre;
     this.filtredHotel=this.hotelfiltre ? this.filtrehotels(this.hotelfiltre) : this.hotels;
  }
  private filtrehotels(c:string):IHotel[]{
    c=c.toLocaleLowerCase();
    const res= this.hotels.filter(
    (hotel: IHotel)=>hotel.hotelName.toLocaleLowerCase().indexOf(c) != -1
    );
      return res;
  }
  constructor(private hotelListService: HotelListService){}

  ngOnInit(): void {
    this.hotelListService.getHotels().subscribe({
      next: hotels => {
        this.hotels=hotels;
        this.filtredHotel=this.hotels;
      },
      error: err =>this.errMsg=err
    });
    this.filtredHotel=this.hotels;
  }

}
