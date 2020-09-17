import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-option-list",
  templateUrl: "./option-list.component.html",
  styleUrls: ["./option-list.component.scss"],
})
export class OptionListComponent implements OnInit {
  @Input()
  optionList = {
    isSingle: true,
    qId: "111",
    options: [
      { key: "A", choice: "111", checked: false },
      { key: "B", choice: "222", checked: true },
      { key: "C", choice: "333", checked: false },
      { key: "D", choice: "444", checked: false },
      { key: "E", choice: "555", checked: false },
    ],
  };
  @Output() selectedValue = new EventEmitter<any>();
  selectedItem = {
    qId: "123",
    answers: "A,B",
  };

  constructor() {}

  ngOnInit() {}

  getToggleValue(e) {
    let item;
    if (this.optionList.isSingle) {
      this.optionList.options.forEach((item) => {
        if (item.key === e.questionValue) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      item = {
        qId: this.optionList.qId,
        answers: e.checked ? "" : e.questionValue,
      };
    } else {
      let answerArr = [];
      const checked = this.optionList.options.find(
        (item) => item.key === e.questionValue && !e.checked
      );
      if (checked) {
        checked.checked = true;
      }
      const unchecked = this.optionList.options.find(
        (item) => item.key === e.questionValue && e.checked
      );
      if (unchecked) {
        unchecked.checked = false;
      }
      this.optionList.options.forEach((item) => {
        if (item.checked) {
          answerArr.push(item.key);
        }
      });
      item = {
        qId: this.optionList.qId,
        answers: answerArr.join(",")
      };
    }
    console.log("marshall", item);
    this.selectedValue.emit(item);
  }
}
