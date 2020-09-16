import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private contents;
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getContent('login_dashboard').subscribe(
      data => { this.contents = data }
    );
  }

}
