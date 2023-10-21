import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeLayoutRoutingModule } from './welcome-layout-routing.module';
import { WelcomeLayoutComponent } from './welcome-layout.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from 'src/share/icon/icon.module';


@NgModule({
  declarations: [
    WelcomeLayoutComponent
  ],
  imports: [
    CommonModule,
    WelcomeLayoutRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    IconModule
  ]
})
export class WelcomeLayoutModule { }
