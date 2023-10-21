import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AppStateService } from './app-state.service';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    /*this.appState.setProductState({
      status:"LOADING"
    })*/
    this.loadingService.showLoadingSpiner();
    let req=request.clone({
      headers: request.headers.set("Autorization", "Bearer JWT")
  });
    
    return next.handle(req).pipe(
      finalize(()=>{
        //this.appState.setProductState({
          //status:""
          this.loadingService.hideLoadingSpiner();
        })
    
    );
  }
}
