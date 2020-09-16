import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss'],
})
export class RegistComponent implements OnInit {

  private contents;
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getContent('regist_dashboard').subscribe(
      data => { this.contents = data }
    );
  }
  triggerOTP() {
    alert('OTP trigger');
  }
}
