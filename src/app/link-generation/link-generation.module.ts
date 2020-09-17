import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LinkGenerationRoutingModule } from './link-generation-routing.module';
import { LinkGenerationComponent } from './link-generation.component';
import { TogglePanelComponent } from '../toggle-panel/toggle-panel.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        LinkGenerationRoutingModule
    ],
    declarations: [LinkGenerationComponent,TogglePanelComponent]
})
export class LinkGenerationModule { }
