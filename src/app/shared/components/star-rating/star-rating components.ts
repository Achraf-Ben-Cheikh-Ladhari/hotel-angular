import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
@Component({
    selector:'app-star-rating',
    templateUrl:'./star-rating components.html',
    styleUrls:['./star-rating components.css']
})
export class StartRatingComponent implements OnChanges{

        public starWidth:number=0;
        
        @Input()
        public rating:number=2;
        @Output()
        public starRatingClicked: EventEmitter<string>=new EventEmitter<string>();
        ngOnChanges(){
            this.starWidth=this.rating*125 / 5;
        }
        public sendRating():void{
            this.starRatingClicked.emit(`la note est de ${this.rating}`);
        }
}