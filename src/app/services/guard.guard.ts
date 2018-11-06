import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  constructor(private router:Router, private auth:AngularFireAuth){

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      

      return this.auth.authState.pipe(map(usuario => {
        if(usuario){
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
      }));; 
  }
}
