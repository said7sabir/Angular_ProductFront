import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './composant/products/products.component';
import { NewProductComponent } from './composant/new-product/new-product.component';
import { EditProductComponent } from './composant/edit-product/edit-product.component';
import { NavbarComponent } from './composant/navbar/navbar.component';
import { HomeComponent } from './composant/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './composant/dashboard/dashboard.component';
import { ErrorCompComponent } from './composant/error-comp/error-comp.component';
import { LoadInterceptor } from './service/load.interceptor';
import { LoginComponent } from './composant/login/login.component';
import { PrincipalComponent } from './composant/principal/principal.component';
import { NotAutorizeComponent } from './composant/not-autorize/not-autorize.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ErrorCompComponent,
    LoginComponent,
    PrincipalComponent,
    NotAutorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoadInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
