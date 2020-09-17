import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UploadRoutingModule
    ],
    declarations: [UploadComponent]
})
export class UploadModule { }
