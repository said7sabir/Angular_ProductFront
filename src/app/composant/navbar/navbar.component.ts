import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppStateService } from 'src/app/service/app-state.service';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    //public isLoading :boolean=false;
  constructor(public appState:AppStateService, 
              public loadingService:LoadingService,
              public router:Router){


                /*this.loadingService.isLoading$.subscribe({
                  next :value=>{
                    this.isLoading=value;
                  }
                })*/
              }


              logout(){
                this.appState.authState={}
                this.router.navigateByUrl('/login')
              } 
              login(){
                this.router.navigateByUrl('/login')
              }    
}
