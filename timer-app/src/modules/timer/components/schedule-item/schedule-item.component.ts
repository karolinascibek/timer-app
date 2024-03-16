import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Schedule } from 'src/share/models/schedule.model';
import { InputTime } from 'src/share/modules/form/models/input-time.models';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {

  @Input() schedule!: Schedule;

  get durration() {
    return this.calculateDiffBetweenDatesInMinutes();
  }

  calculateDiffBetweenDatesInMinutes(): number {
    return (this.schedule.dateStop.getTime() - this.schedule.dateStart.getTime()) / (1000 * 60);
  }

  getTime(date: Date): InputTime {
    return {
      hour: date.getHours(),
      minutes: date.getMinutes()
    }
  }
}
