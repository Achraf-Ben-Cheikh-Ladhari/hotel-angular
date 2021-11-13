import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/service/hotel-list-service';



@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  public hotels:IHotel=<IHotel>{};
  hotel: IHotel | undefined;

  constructor(private route:ActivatedRoute, private hotelService: HotelListService,private router:Router ) { 
  }

  ngOnInit(): void {
    const id:Number = +(this.route.snapshot.paramMap.get('id'))!;
    this.hotelService.getHotels().subscribe((hotel:IHotel[])=>{
      this.hotel= hotel.find(hotels =>hotels.hotelId === id);
      console.log('hotel : ',this.hotel?.hotelId);
    });
  }
  public backToList():void{
    this.router.navigate(['/hotels']);
  }

}
