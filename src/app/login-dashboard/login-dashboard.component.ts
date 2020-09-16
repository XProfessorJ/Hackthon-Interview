import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss'],
})
export class LoginDashboardComponent implements OnInit {
  private contents;
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getContent('dashboard').subscribe(
      data => { this.contents = data }
    );
  }

  contenToggle(locale: string) {
    this.contentService.setLocale(locale);
  }

}
