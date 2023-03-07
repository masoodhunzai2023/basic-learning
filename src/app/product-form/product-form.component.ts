import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productInfo: any;
  dublicate:boolean=false;
  userId: any;
  public constructor(private request:ProductService,private toastrService:ToastrService)
  {}
  public ngOnInit(): void {
    this.request.getRecords().subscribe(record=>
      {
        this.productInfo=record;
      })
  }
  productForm = new FormGroup({

    id: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    unitPrice: new FormControl('', Validators.required)
  });
  
  ProductForm() {
  const FormData=this.productForm.value;
  this.request.postData(FormData).subscribe({
    next:()=>
    {
      console.log("success")
      this.toastrService.success('Successfully Added', 'Added');
    },
    error:()=>
    {
      console.log("error")
      this.toastrService.error('Error: Something went really wrong');
    }
  })

  {
    this.productForm.reset();
  }
 
  }
  get id() {
    return this.productForm.get('id');
  }
  get description() {
    return this.productForm.get('description');
  }
  get quantity() {
    return this.productForm.get('quantity');
  }
  get unitPrice() {
    return this.productForm.get('unitPrice');
  }
  
  public getProductsById() 
  {
  this.userId = this.productForm.value.id;
    this.dublicate=false;
    for (let i = 0; i < this.productInfo.length; i++) {
      if (this.productInfo[i]["id"] == this.userId)
       {
        this.dublicate=true;
        }
    }
}
}
