import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/Product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  formProduct!:FormGroup;

  constructor(private fb:FormBuilder, private productService:ProductService){}
  
  ngOnInit() {
    this.formProduct=this.fb.group({
      name:this.fb.control('',[Validators.required]),
      price:this.fb.control(0,[Validators.min(1500)]),
      checked:this.fb.control(true)
      })
  }

  handelSave(){
    let product:Product=this.formProduct.value;
    this.productService.saveProduct(product).subscribe({
      next :data=>{
        alert(JSON.stringify(product))
      }
    })
  }

}
