import { Component } from '@angular/core';
import { AppStateService } from 'src/app/service/app-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public appState:AppStateService){}

  totalChecked(){
    let checkedProducts=this.appState.productState.products.filter((p:any)=>p.checked==true)
    return checkedProducts.length;
  }

}
