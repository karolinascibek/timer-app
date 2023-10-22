import { Component, ViewChild } from '@angular/core';
import { ViewContainerRefDirective } from 'src/share/directives/view-container-ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timer-app';

  @ViewChild(ViewContainerRefDirective, {static: true}) viewContainerRefDirective!: ViewContainerRefDirective;

}
