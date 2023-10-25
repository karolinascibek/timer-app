import { Component, Input } from '@angular/core';
import { InputTime } from '../../models/input-time.models';
import { InputTimeLabel } from '../../models/input-time.-label.models';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent {

  @Input() time: InputTime = {
    hour: 15,
    minutes: 11,
  }

  @Input() label: InputTimeLabel = ""

}
