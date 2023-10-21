import { Component } from '@angular/core';
import { AppIconComponent } from '../../interfaces/app-icon-component.interface';

@Component({
  selector: 'app-icon-clock',
  templateUrl: './icon-clock.component.html',
  styleUrls: ['./icon-clock.component.scss']
})
export class IconClockComponent implements AppIconComponent {
}
