import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss'],
})
export class LoginDashboardComponent implements OnInit {
  private contents;
  private loginCondition: boolean = true;
  private name: string;
  private password: string;
  private warningEnable: boolean = false;
  constructor(
    private contentService: ContentService,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.contentService.getContent('dashboard').subscribe(
      data => { this.contents = data }
    );
  }

  contenToggle(locale: string) {
    this.contentService.setLocale(locale);
  }

  toggleConfirmEnable() {
    this.loginCondition = !this.loginCondition;
  }

  triggerLogin() {
    const body = {
      "userName": this.name,
      "password": this.password
    }
    this.apiService.login(body).subscribe(
      flag => {
        if (flag) {
          this.router.navigate(['/homepage']);
        }
        else {
          this.warningEnable = true;
        }
      }
    )
  }
}
