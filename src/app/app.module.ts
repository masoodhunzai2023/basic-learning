import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFormComponent } from './product-form/product-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { DatasalesComponent } from './datasale/datasale.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    NavBarComponent,
    DeleteRecordComponent,
    DatasalesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
