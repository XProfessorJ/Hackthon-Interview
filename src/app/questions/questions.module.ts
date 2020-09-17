import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsPageRoutingModule } from './questions-routing.module';

import { QuestionsPage } from './questions.page';

import { OptionListComponent } from '../option-list/option-list.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule
    
  ],
  declarations: [QuestionsPage,OptionListComponent,ToggleButtonComponent]
})
export class QuestionsPageModule {}
