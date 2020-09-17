import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AnalysisRoutingModule
    ],
    declarations: [AnalysisComponent]
})
export class AnalysisModule { }
