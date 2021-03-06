import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-link-generation',
  templateUrl: './link-generation.component.html',
  styleUrls: ['./link-generation.component.scss'],
})
export class LinkGenerationComponent implements OnInit {
  private addContainerToggle: boolean = false;
  private name: string;
  private id: string;
  private phone: string;
  private email: string;
  private toastInfo: string;
  public intervieweeList: any;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(
  ) {
    this.apiService.getCandidate().subscribe(
      () => {
        this.intervieweeList = this.apiService.getIntervieweeList()
      }
    );
  }

  triggerAddPanel() {
    this.addContainerToggle = !this.addContainerToggle;
  }

  addNewInterviewee() {
    const body = {
      "userName": this.name,
      "userIdCard": this.id,
      "userPhone": this.phone,
      "userEmail": this.email
    }
    this.apiService.addNewInterviewee(body).subscribe(
      flag => {
        this.toastInfo = flag ? 'Success' : 'Failed';
        if (flag) {
          setTimeout(() => {
            this.addContainerToggle = !this.addContainerToggle;
            this.toastInfo = '';
            location.reload();
          }, 2000)
        }
      }
    )
  }
}
