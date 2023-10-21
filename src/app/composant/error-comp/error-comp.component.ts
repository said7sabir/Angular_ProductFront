import { Component } from '@angular/core';
import { AppStateService } from 'src/app/service/app-state.service';

@Component({
  selector: 'app-error-comp',
  templateUrl: './error-comp.component.html',
  styleUrls: ['./error-comp.component.css']
})
export class ErrorCompComponent {

  constructor(public appState:AppStateService){}

}
