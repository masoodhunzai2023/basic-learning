import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // private apiUrl = '/assets/products.json';

  constructor(private http: HttpClient) { }

  // onSubmit(data: any) {
  //   this.http.post(this.apiUrl, data).subscribe(
  //       response => console.log('Data posted successfully', response),
  //       error => console.error('Error posting data', error)
  //     );
  // }
 getRecords()
  {
    return this.http.get('http://localhost:3000/product');
  }

  postData(data:any)
  {
    return this.http.post('http://localhost:3000/product',data);
  }
  
  deleteDataById(id: number){
    
    const url = `http://localhost:3000/product/${id}`;
    return this.http.delete(url);
  }
}
