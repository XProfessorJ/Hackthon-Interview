import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss'],
})
export class LoginDashboardComponent implements OnInit {
  private contents;
  private loginCondition: boolean = true;
  constructor(
    private contentService: ContentService,
    private router: Router
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

  triggerLogin(){
    this.router.navigate(['/homepage'])
  }
}
