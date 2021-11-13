import { Component } from "@angular/core";

@Component({
  selector : 'app-root',
  styleUrls:['./app.component.css'],
  templateUrl:'./app.component.html',
})
export class AppComponent{
  title: string='Getionnaire Hotel';
  public getDate():Date{
    return new Date;
  }
}