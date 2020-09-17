import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-questions",
  templateUrl: "./questions.page.html",
  styleUrls: ["./questions.page.scss"],
})
export class QuestionsPage implements OnInit {
  public currentId: number = 0;
  public code: string;

  public result: any = {
    userId: "51972a3a-7f81-4f43-ad67-2ded0b3e1f6a",
    answerList: [],
  };
  textValue: string = "GGG";
  public time: number = 0;
  public display = "00:00";
  questionlist: any;
  constructor(private apiService: ApiService, private router:Router,private toastContoller: ToastController) {}
  totalCount = 0;
  format(num: number) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  public currentQuestions: string ;
  public description: string ;
  public value = {
    qId: "",
    answers: [],
  };
  finalStep =false;
  optionList = {
    questiontype: "",
    isSingle: true,
    description: "",
    qId: "",
    options: [],
  };
  ngOnInit() {
    const intervalID = setInterval(() => {
      this.time++;
      if (this.time == 3600) {
        this.showToast();
        clearInterval(intervalID)
        // this.submit();
        // this.router.navigate(["/login-dashboard"]);
      }
      
      this.display =
        this.format(Math.round(this.time / 60)) +
        ":" +
        this.format(this.time % 60);
    }, 1000);
    this.apiService.getQuestionList().subscribe((res) => {
      console.log(res)
      this.questionlist = res;
      this.totalCount = this.questionlist.length;

      this.optionList.description = this.questionlist[
        this.currentId
      ].description;
      this.optionList.options = this.questionlist[this.currentId].options;
      this.optionList.qId = this.questionlist[this.currentId].qId;
      this.optionList.questiontype = this.questionlist[
        this.currentId
      ].questionTypeEnum;
      this.optionList.isSingle = true;
      if (this.optionList.questiontype == "MULTY_CHOICE") {
        this.optionList.isSingle = false;
      }
      this.currentQuestions = this.questionlist[this.currentId].questionTypeEnum;
      this.description = this.questionlist[this.currentId].description;
    });
  }

  public getValue(obj: any) {
    this.value.answers = obj.answers.split(",");
    this.value.qId = obj.qId;
    console.log(this.value);
  }

  confirm() {
    if (this.currentQuestions == "CODING" || this.currentQuestions == "ESSAY") {
      this.value.qId = this.questionlist[this.currentId].qId;
      var obj = JSON.parse(JSON.stringify(this.code));
      this.value.answers = [];
      this.value.answers.push(obj);
      this.check();
      console.log(this.result);
    } else if (
      this.currentQuestions == "MULTY_CHOICE" ||
      this.currentQuestions == "SINGLE_CHOICE"
    ) {
      this.check();
      console.log(this.result);
    }
  }

  check() {
    var flag: boolean = false;
    for (var i = 0; i < this.result.answerList.length; i++) {
      if (this.result.answerList[i].qId == this.value.qId) {
        this.result.answerList[i].answers = this.value.answers;
        flag = true;
        break;
      }
    }
    if (!flag) {
      this.add();
    }
  }

  add() {
    var obj = JSON.parse(JSON.stringify(this.value));
    this.result.answerList.push(obj);
  }

  last() {
    this.confirm() ;
    this.currentId--;
    if(this.currentId ==this.totalCount){
      this.finalStep =true;
    }else{
      this.finalStep =false;
    }
    if (this.currentId < 0) {
      this.currentId++;
    } else {
      this.optionList.description = this.questionlist[
        this.currentId
      ].description;
      this.optionList.options = this.questionlist[this.currentId].options;
      this.optionList.qId = this.questionlist[this.currentId].qId;
      this.optionList.questiontype = this.questionlist[
        this.currentId
      ].questiontype;
      this.optionList.isSingle = true;
      if (this.optionList.questiontype == "MULTY_CHOICE") {
        this.optionList.isSingle = false;
      }
      this.currentQuestions = this.questionlist[this.currentId].questionTypeEnum;

      this.description = this.questionlist[this.currentId].description;
    }
    this.getTextValue(this.currentId)
  }

  getTextValue(currentId){
    if (this.currentQuestions == "CODING" || this.currentQuestions == "ESSAY") {
      
      if(this.result.answerList.length>0){
        for(var answer in this.result.answerList){
          if(answer['qId'] == this.questionlist[this.currentId].qId){
            this.textValue =answer['answers'][0]
          }else{
            this.textValue = ""
          }
        }
      }else{
        this.textValue = ""
      }
      
    }
  }
  next() {
    this.confirm() ;
    console.log("next",this.currentId)
    this.currentId++;
    if(this.currentId ==this.totalCount-1){
      this.finalStep =true;
    }else{
      this.finalStep =false;
    }
    this.getTextValue(this.currentId)
    this.currentId %= this.totalCount;
    this.optionList.description = this.questionlist[this.currentId].description;
    this.optionList.options = this.questionlist[this.currentId].options;
    this.optionList.qId = this.questionlist[this.currentId].qId;
    this.optionList.questiontype = this.questionlist[
      this.currentId
    ].questiontype;
    this.optionList.isSingle = true;
    if (this.optionList.questiontype == "MULTY_CHOICE") {
      this.optionList.isSingle = false;
    }
    this.currentQuestions = this.questionlist[this.currentId].questionTypeEnum;

    this.description = this.questionlist[this.currentId].description;
  }
  submit(){
    this.apiService.submitAnswer(this.result).subscribe(
      res=>{
        console.log("submit: ",res);
      }
    )
  }

  async showToast(){
    const toast = await this.toastContoller.create({
      //header: 'Toast header',
      message: 'SessionTimeout, system will submit answer and close this window automatically !',
      position: 'middle',
      buttons: [
         {
          text: 'Got it!',
          role: 'cancel',
          handler: () => {
           this.submit();
        this.router.navigate(["/login-dashboard"]);
          }
        }
      ]
    });
    toast.present();
  }
  
}
