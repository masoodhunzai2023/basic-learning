import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-datasales',
  templateUrl: './datasale.component.html',
  styleUrls: ['./datasale.component.css'],
})
export class DatasalesComponent implements OnInit {
  title = 'warehouse';
  JSON_data: any[] ;
  search_number!: number;
  input_quantity: number[] = [];
  id!: number;
  // ID: number;
  unitPrice!: number;
  filteredArray!: any[];
  // filteringArray: any;
  productquantity:{[key:number]:number}={}

  public constructor(private http: HttpClient) {
    this.JSON_data = [];
  }

  public ngOnInit(): void {
    this.filteredArray = [];
    this.getProductsById();
    this.filteredData();
  }

  getProductsById(): void {
    this.http.get<any[]>('http://localhost:3000/product').subscribe((data) => {
      this.JSON_data = data;
      this.input_quantity=Array(this.JSON_data.length).fill(0)
      console.log(this.JSON_data);
    });
  }

  filteredData() {
    this.JSON_data.filter((item) => {
      if (item.id == this.search_number) {
        this.filteredArray.push(item);
        
        
      }
    });

    console.log(typeof this.filteredArray);
  }

  totalPrice(search_number:number) {
    let productPrice = this.JSON_data.find(
      (item) => item.id === this.search_number
    ).unitPrice;
    const productquantity =this.productquantity[this.search_number] || 0;
    return productPrice * productquantity;
  }
  clearInput(index:number) {
     this.input_quantity [index]= 0;
  }
}