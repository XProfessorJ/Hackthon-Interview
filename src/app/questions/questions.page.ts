import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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

  public time:number=0;
  public display ='00:00';

  constructor() {
    
  }
  totalCount =0;
  format(num:number){
    if(num<10){
      return "0"+num;
    }else{
      return num;
    }
  }

  ngOnInit() {
    this.totalCount= this.questionlist.length;
    
    setInterval(()=>{
       this.time++;
       if(this.time==3600){
         alert("time out!")
       }
       this.display=this.format(Math.round(this.time/60))+":"+this.format(this.time%60);
    },1000);
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
  }
  questionlist = [
    {
      questiontype: "MULTY_CHOICE",
      description:
        "Which three guidelines are used to ",//protect confidential information? (Choose three)
      qId: "1144115b-9634-4fac-85a2-82190c4b3262",
      options: [
        {
          key: "A",
          choice: "Limit access to objects",// holding confidential information
        },
        {
          key: "B",
          choice: "Clearly identify and ",//label confidential information.
        },
        { key: "C", choice: "333" },
        { key: "D", choice: "444" },
        { key: "E", choice: "555" },
      ],
    },
    {
      questiontype: "SINGLE_CHOICE",
      isSingle: true,
      description:
        "Which interface in the java.util.function package will return a void return type?",
      qId: "b3d7f7fe-55ec-430a-beda-f09fbdc45fce",
      options: [
        { key: "A", choice: "Supplier" },
        { key: "B", choice: "222" },
        { key: "C", choice: "333" },
        { key: "D", choice: "444" },
        { key: "E", choice: "555" },
      ],
    },
    {
      questiontype: "CODING",
      qId: "0277a431-0ecc-4677-8c73-0df24e582c63",
      description:
        "Implement an algorithm to sort a linked list by using Quick Sort. Any existing implementation is not allowed to user.",
    },
  ];
  
  public currentQuestions: string = this.questionlist[this.currentId]
    .questiontype;
  public description: string = this.questionlist[this.currentId].description;
  public value = {
    qId: "",
    answers: [],
  };

  optionList = {
    questiontype: "",
    isSingle: true,
    description: "",
    qId: "",
    options: [],
  };

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
    var flag:boolean=false;
    for(var i=0;i<this.result.answerList.length;i++){
      if(this.result.answerList[i].qId==this.value.qId){
        this.result.answerList[i].answers=this.value.answers;
        flag=true;
        break;
      }
    }
    if(!flag){
      this.add();
    }
  }

  add() {
    var obj = JSON.parse(JSON.stringify(this.value));
    this.result.answerList.push(obj);
  }

  last() {
    this.currentId--;
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
      this.currentQuestions = this.questionlist[this.currentId].questiontype;

      this.description = this.questionlist[this.currentId].description;
    }
  }

  next() {
    this.currentId++;
    this.currentId %= 3;
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
    this.currentQuestions = this.questionlist[this.currentId].questiontype;

    this.description = this.questionlist[this.currentId].description;
  }
}
