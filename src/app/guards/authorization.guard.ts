import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from '../service/app-state.service';


@Injectable({
  providedIn: 'root'
})
export class AutorizationGuard {
  constructor(private appState : AppStateService, private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.appState.authState.roles.includes('ADMIN')){
      return true
    }else{
      this.router.navigateByUrl("/principal/notAutorize")
      return false
    }
    
  }
}
