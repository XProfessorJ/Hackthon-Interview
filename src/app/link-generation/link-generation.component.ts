import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-generation',
  templateUrl: './link-generation.component.html',
  styleUrls: ['./link-generation.component.scss'],
})
export class LinkGenerationComponent implements OnInit {
  private addContainerToggle: boolean = false;
  constructor() { }

  ngOnInit() { }

  triggerAddPanel() {
    this.addContainerToggle = !this.addContainerToggle;
  }
}
