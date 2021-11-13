import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { IHotel } from '../models/hotel';



@Injectable({
  providedIn: 'root'
})
export class HotelDetailGuard implements CanActivate {
  private HOTEL='api/hotels.json';
  public hotels:IHotel=<IHotel>{};
  constructor(private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(route);
      const id=+route.url[2].path;
      
      if (isNaN(id) || id <=0){
        alert('Hotel est inconnue');
        this.router.navigate(['/hotels']);
        return false;
      }
    
      return true;
  }

}

