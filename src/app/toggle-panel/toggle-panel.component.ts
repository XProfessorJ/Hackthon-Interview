import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.scss'],
})
export class TogglePanelComponent implements OnInit {
  private panelToggle: boolean = false;

  constructor() { }

  ngOnInit() { }

  togglePanel() {
    this.panelToggle = !this.panelToggle;
  }
}
