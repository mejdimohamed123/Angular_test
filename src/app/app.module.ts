import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
   {path:'product/show/:id',component:ShowproductComponent},
   {path:'forulaireajout',component:FormProductComponent},
 {path:'**',component:NotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProductComponent,
    HomeComponent,
    ShowproductComponent,
    AddProductComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
