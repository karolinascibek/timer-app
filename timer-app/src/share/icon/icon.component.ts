import { Component, ViewChild, OnInit, Input, Type } from '@angular/core';
import { ViewContainerRefDirective } from '../directives/view-container-ref.directive';
import { IconHomeComponent } from './components/icon-home/icon-home.component';
import { AppIconComponent } from './interfaces/app-icon-component.interface';
import { IconClockComponent } from './components/icon-clock/icon-clock.component';
import { IconAddComponent } from './components/icon-add/icon-add.component';
import { IconSettingsComponent } from './components/icon-settings/icon-settings.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconCalendarTodayComponent } from './components/icon-calendar-today/icon-calendar-today.component';
import { IconDoubleArrowRightComponent } from './components/icon-double-arrow-right/icon-double-arrow-right.component';
import { IconDoubleArrowLeftComponent } from './components/icon-double-arrow-left/icon-double-arrow-left.component';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { IconArrowDownComponent } from './components/icon-arraw-down/icon-arrow-down.component';
import { IconArrowUpComponent } from './components/icon-arraw-up/icon-arrow-up.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit{

  @Input() icon!: string;
  @ViewChild(ViewContainerRefDirective, {static: true}) iconRef!: ViewContainerRefDirective;

  icons: {[key: string]: {component: Type<AppIconComponent>}} = {
    'add': {component: IconAddComponent},
    'home': {component: IconHomeComponent},
    'settings': {component: IconSettingsComponent},
    'close': {component: IconCloseComponent},
    'clock': {component: IconClockComponent},
    'today': {component: IconCalendarTodayComponent},
    'double-arrow-right': {component: IconDoubleArrowRightComponent},
    'double-arrow-left': {component: IconDoubleArrowLeftComponent},
    'menu': {component: IconMenuComponent},
    'arrow-down': {component: IconArrowDownComponent},
    'arrow-up': {component: IconArrowUpComponent},
  }

  @Input() className: string = 'classic';


  ngOnInit(): void {
      this.loadComponent();
  }

  getComponent(): Type<AppIconComponent> | null {
    return this.icons[this.icon]?.component || null;

  }

  loadComponent(): void {
    const viewContainerRef = this.iconRef.viewContainerRef;
    viewContainerRef.clear();

    const iconComponent = this.getComponent();
    if(!iconComponent) {
      return ;
    }

    const componentRef = viewContainerRef.createComponent<AppIconComponent>(iconComponent);
  }
}
