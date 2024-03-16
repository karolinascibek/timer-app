import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss']
})
export class InputCalendarComponent {
  @Input() date: Date = new Date();

  startDate(): string {
    return `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
  }
}
