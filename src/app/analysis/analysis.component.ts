import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit {

  constructor(private apiService: ApiService,private router:Router) { 
    this.apiService.getCandidate()
  }
  @ViewChild('single') single; 
  @ViewChild('multiple') multiple; 
  @ViewChild('coding') coding; 
  @ViewChild('essay') essay; 
  @ViewChild('c1') c1; 
  @ViewChild('c2') c2; 
  @ViewChild('c3') c3; 
  @ViewChild('c4') c4; 
  @ViewChild('c5') c5; 
  ngOnInit() {}

  submit(){
    const v1 = this.single.nativeElement.value;
    
    const v2 = this.multiple.nativeElement.value;
    const v3 = this.coding.nativeElement.value;
    const v4 = this.essay.nativeElement.value;

    const c1 = this.c1.nativeElement.value;
    
    const c2 = this.c2.nativeElement.value;
    const c3 = this.c3.nativeElement.value;
    const c4 = this.c4.nativeElement.value;
    const c5 = this.c5.nativeElement.value;

    const quizUpateRequest ={
      "userId": "51972a3a-7f81-4f43-ad67-2ded0b3e1f6a",
      "signleChoiceScore": v1,
      "signleChoiceComment": c1,
      "multyChoiceScore": v2,
      "multyChoiceComment": c2,
      "codingScore": v3,
      "codingComment": c3,
      "essayQuestionScore": v4,
      "essayQuestionComment": c4
    }

    this.apiService.submitQuizScore(quizUpateRequest).subscribe(
      res=>{
        this.router.navigate(["/homepage/interview/review"])
      }
    )

  }
  back(){
    this.router.navigate(["/homepage/interview/review"])
  }

}
