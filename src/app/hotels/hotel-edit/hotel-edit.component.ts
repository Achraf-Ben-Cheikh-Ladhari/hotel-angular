import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {
  public hotelform:FormGroup=<FormGroup>{};
  constructor(private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.hotelform=this.fb.group({
      hotelName:['',Validators.required],
      hotelprice :['',Validators.required],
      starRating:[''],
      description:['']
    });
  }
  savehotel():void{
    console.log(this.hotelform.value);
  }

}
