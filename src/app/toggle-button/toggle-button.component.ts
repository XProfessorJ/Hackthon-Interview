import { Component, OnInit, Output, EventEmitter, Input, ViewChild, OnChanges } from "@angular/core";

@Component({
  selector: "app-toggle-button",
  templateUrl: "./toggle-button.component.html",
  styleUrls: ["./toggle-button.component.scss"],
})
export class ToggleButtonComponent implements OnInit,OnChanges {
  
  
  constructor() {}
  @Output() toggleValue = new EventEmitter<any>();
  @Input() switchValue: boolean = false;
  @Input() toggleDisabled: boolean = false;
  @Input()
  title = "";
  @Input()
  questionValue = "";
  @ViewChild('label1') label; 
  ngOnInit() {
    if(this.switchValue){
      //console.log(this.label.nativeElement)
      this.color="grey"
    }else{
      this.color="white"
    }
  }
  color ="white";
  fcolor ="black"
  public switchButtonClick(): void {
    if(!this.switchValue){
      console.log(this.label.nativeElement)
      this.color="grey";
      this.fcolor = "white";
    }else{
      this.color="white";
      this.fcolor ="black";
    }
    this.toggleValue.emit({
      title: this.title,
      questionValue: this.questionValue,
      checked: this.switchValue
    });
  }
  ngOnChanges(): void {
    if(this.label&&this.switchValue){
      console.log(this.label.nativeElement)
      this.color="grey";
      this.fcolor = "white";
    }else{
      this.color="white";
      this.fcolor ="black"
    }
  }
}
