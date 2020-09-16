import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  private customerInfo = {
    "phone":'123',
    "email":"1502734680@11.com",
    "id":"123123123"
  }
  constructor() { }

  ngOnInit() {}

}
