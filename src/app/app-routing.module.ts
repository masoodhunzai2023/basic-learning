import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { DatasalesComponent } from './datasale/datasale.component';

const routes: Routes = [
  {path:'product-form',component: ProductFormComponent},
  {path:'delete-record',component:DeleteRecordComponent},
  {path:'data-sale',component:DatasalesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
