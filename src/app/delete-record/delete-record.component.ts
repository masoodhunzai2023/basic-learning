import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})
export class DeleteRecordComponent {
  idd: any;
  constructor(private request:ProductService,private toastrService:ToastrService) {}
  deleteRecord = new FormGroup({
    id: new FormControl('', Validators.required),
  });
  get id() {
    return this.deleteRecord.get('id');
  }
  
  onDelete() {
    this.idd = this.deleteRecord.value.id;
    this.request.deleteDataById(this.idd).subscribe({
      next: () => {
        this.toastrService.success('Successfully Deleted', 'Deletion');
      },
      error: () => {
       this.toastrService.error('Error: Id not found');
      },
    });
    {
      this.deleteRecord.reset();
    }
}

}
