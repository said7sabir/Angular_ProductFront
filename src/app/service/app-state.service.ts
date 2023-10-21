import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

public productState :any={
    products:[],
    keyword:"",
    totalPages:0,
    pageSize:4,
    currentPage:1,
    totalProducts:0,
    status:"",
    errorMessage:""
}
public setProductState(state:any):void{
  this.productState={...this.productState, ...state}
}

public authState:any={
  isAuthenticated:false,
  username:undefined,
  password:undefined,
  roles:undefined,
  token:undefined
}

public setAuthState(state:any):void{
  this.authState={...this.authState, ...state}
}

}
