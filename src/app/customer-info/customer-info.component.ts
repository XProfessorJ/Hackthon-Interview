import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  private customerInfo;
  private inputEnable: boolean = true;
  private buttonTag: string = "EDIT";
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.customerInfo = this.apiService.getCustomerInfo();
    debugger
  }

  trggerInput() {
    this.inputEnable = !this.inputEnable;
    this.buttonTag = this.inputEnable ? "EDIT" : "SAVE";
    if (this.inputEnable) {
      const customerInfo = {
        "id": this.customerInfo.userId,
        "userEmail": this.customerInfo.userEmail,
        "userPhone": this.customerInfo.userPhone
      }
      this.apiService.updateInfo(customerInfo).subscribe(
        flag => {
          if (flag) {
          }
        }
      )
    }
  }
}
