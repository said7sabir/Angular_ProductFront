import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product.model';
import { AppStateService } from 'src/app/service/app-state.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    
  constructor(private productService:ProductService, private router:Router,
    public appState:AppStateService){}
  
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    /*this.appState.setProductState({
      status:"LOADING"
    })*/
    this.productService.getProducts(this.appState.productState.keyword,
                                    this.appState.productState.currentPage,
                                    this.appState.productState.pageSize)
      .subscribe({
      next:(resp)=>{
        let products=resp.body as Product[];
        let totalProducts= parseInt(resp.headers.get('x-total-count')!)
        let totalPages=
        Math.floor(totalProducts/this.appState.productState.pageSize)
        if(totalProducts % this.appState.productState.pageSize!= 0){
          ++totalPages;
        }
        this.appState.setProductState({
          products:products,
          totalProducts:totalProducts,
          totalPages:totalPages,
          status:"LOADED"
        })
      }, error:err=>{
        this.appState.setProductState({
          status:"ERROR",
          errorMessage:"ERREUR de CHARGEMENT"
        })
      }
    })
  }

  checkedProduct(product:Product){
    this.productService.checkProduct(product).subscribe({
      next:value=>{
        product.checked=!product.checked;
      }
    })

  }
  handelDelete(product:Product){
    this.productService.delete(product).subscribe({
      next:value=>{
        this.appState.productState.products=
        this.appState.productState.products.filter((p:any)=>p.id!=product.id)
      }
    })
  }

  handelEdit(product:Product){
    this.router.navigateByUrl(`/principal/editProduct/${product.id}`)
  }

  /*search(){
    this.productService.searchProduct(this.keyword).subscribe({
      next:value=>{
        this.products=value;
      }
    })
  }*/

  goToPage(page:number){
    this.appState.productState.currentPage=page;
    this.getProducts();
  }
}
