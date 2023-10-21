import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composant/home/home.component';
import { ProductsComponent } from './composant/products/products.component';
import { NewProductComponent } from './composant/new-product/new-product.component';
import { EditProductComponent } from './composant/edit-product/edit-product.component';
import { LoginComponent } from './composant/login/login.component';
import { PrincipalComponent } from './composant/principal/principal.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AutorizationGuard } from './guards/authorization.guard';
import { NotAutorizeComponent } from './composant/not-autorize/not-autorize.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {
    path:"principal", component:PrincipalComponent,canActivate:[AuthenticationGuard], children:[
      {path:"home", component:HomeComponent},
      {path:"products", component:ProductsComponent},
      {path:"newProduct", component:NewProductComponent, canActivate:[AutorizationGuard]},
      {path:"editProduct/:id", component:EditProductComponent, canActivate:[AutorizationGuard]},
      {path:"notAutorize", component:NotAutorizeComponent}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
