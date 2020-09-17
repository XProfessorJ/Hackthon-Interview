import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private customerInfo;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: PlatformLocation,
  ) { }

  ngOnInit() {
    // const token = this.route.snapshot.paramMap.get('token');
    const token = this.location['location'].pathname.replace('/homepage/', '');
    if (token && token != "interview/review") {
      this.apiService.tokenAuth(token).subscribe(
        flag => {
          this.customerInfo = this.apiService.getCustomerInfo();
          if (!flag) {
            this.router.navigate(['/error'])
          }
        }
      );
    }
    else {
      this.customerInfo = this.apiService.getCustomerInfo();
    }
  }

  triggerConfrim() {
    this.router.navigate(['/customer-info'])
  }

}
