import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconClockComponent } from './components/icon-clock/icon-clock.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconCalendarTodayComponent } from './components/icon-calendar-today/icon-calendar-today.component';
import { IconHomeComponent } from './components/icon-home/icon-home.component';
import { IconSettingsComponent } from './components/icon-settings/icon-settings.component';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { IconAddComponent } from './components/icon-add/icon-add.component';
import { IconComponent } from './icon.component';
import { ViewContainerRefDirective } from '../directives/view-container-ref.directive';
import { IconDoubleArrowRightComponent } from './components/icon-double-arrow-right/icon-double-arrow-right.component';
import { IconDoubleArrowLeftComponent } from './components/icon-double-arrow-left/icon-double-arrow-left.component';




@NgModule({
  declarations: [
    IconClockComponent,
    IconCloseComponent,
    IconCalendarTodayComponent,
    IconHomeComponent,
    IconSettingsComponent,
    IconMenuComponent,
    IconAddComponent,
    IconComponent,
    IconDoubleArrowRightComponent,
    IconDoubleArrowLeftComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ViewContainerRefDirective,
  ],
  exports: [
    IconClockComponent,
    IconCloseComponent,
    IconCalendarTodayComponent,
    IconHomeComponent,
    IconSettingsComponent,
    IconMenuComponent,
    IconAddComponent,
    IconComponent
  ]
})
export class IconModule { }
