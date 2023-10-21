import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  
  formEdit!:FormGroup
  productId!:number
  constructor(private fb:FormBuilder, 
              private activatedRoute:ActivatedRoute,
              private productService:ProductService){}
  ngOnInit() {

    this.productId=this.activatedRoute.snapshot.params['id'];
    this.productService.getById(this.productId).subscribe({
      next:product=>{
        this.formEdit=this.fb.group({
          id : this.fb.control(product.id),
          name: this.fb.control(product.name,[Validators.required]),
          price:this.fb.control(product.price,[Validators.min(1000)]),
          checked:this.fb.control(product.checked)
        })
      }
    })
    
  
  }

  updateProduct(){
    let product:Product=this.formEdit.value;
    this.productService.updateProduct(product).subscribe({
      next :value=>{
        alert(JSON.stringify(value))
      }
    })
  }
}
