import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.scss'],
})
export class TogglePanelComponent implements OnInit {
  private panelToggle: boolean = false;
  @Input() customer;

  constructor() { }

  ngOnInit() { }

  togglePanel() {
    this.panelToggle = !this.panelToggle;
  }
}
