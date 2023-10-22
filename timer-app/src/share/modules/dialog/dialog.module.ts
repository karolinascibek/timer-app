import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { IconModule } from 'src/share/icon/icon.module';
import { DialogService } from './services/dialog.service';
import { ViewContainerRefDirective } from 'src/share/directives/view-container-ref.directive';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    ViewContainerRefDirective,
    MatButtonModule,
  ],
  exports: [
    DialogComponent,
  ]
})
export class DialogModule { }
