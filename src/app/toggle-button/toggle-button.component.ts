import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from "@angular/core";

@Component({
  selector: "app-toggle-button",
  templateUrl: "./toggle-button.component.html",
  styleUrls: ["./toggle-button.component.scss"],
})
export class ToggleButtonComponent implements OnInit {
  constructor() {}
  @Output() toggleValue = new EventEmitter<any>();
  @Input() switchValue: boolean = false;
  @Input() toggleDisabled: boolean = false;
  @Input()
  title = "";
  @Input()
  questionValue = "";
  @ViewChild('label1') label; 
  ngOnInit() {}
  color ="white"
  public switchButtonClick(): void {
    if(!this.switchValue){
      console.log(this.label.nativeElement)
      this.color="grey"
    }else{
      this.color="white"
    }
    console.log(!this.switchValue);
    this.toggleValue.emit({
      title: this.title,
      questionValue: this.questionValue,
      checked: this.switchValue
    });
  }
}
