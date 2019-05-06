import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  submitted: boolean;
  formControls = this.customerService.form.controls;


  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid) {
      // if (this.customerService.form.get('$key').value == null)
      // update
      this.submitted = false;
    }

  }

}
