import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InputTime } from '../../models/input-time.models';
import { InputTimeLabel } from '../../models/input-time.-label.models';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent implements OnInit {

  @Input() dateTime!: Date;
  @Input() label: InputTimeLabel = "";

  placeholderHour: string = "HH";
  placeholderMinutes: string = "MM";

  minutes!: number;
  hour!: number;

  time!: string;

  ngOnInit(): void {
      this.minutes = this.dateTime.getMinutes();
      this.hour = this.dateTime.getHours();
      this.setTime();
  }

  setTime() {
    this.time = `${this.hour}:${this.minutes}`;
  }

  showOptions() {
    console.log({msg: "asasas"})
  }

  handleTime() {

    const [h, m] = this.time.split('').slice(0, 5).join('').split(':');
    console.log({h, m})
    this.dateTime.setHours(this.hour);
    this.dateTime.setMinutes(this.minutes);
  }

  decreaseHour() {

    if(this.hour <= 0) {
      return;
    }

    this.hour--;
    console.log('down')
    this.setTime();
  }

  increaseHour() {

    if(this.hour > 23) {
      return;
    }

    this.hour++;
    this.setTime();
  }


  decreaseMinutes() {

    if(this.minutes <= 0) {
      return;
    }
    this.minutes--;
    this.setTime();
  }

  increaseMinutes() {
    if(this.minutes > 59) {
      return;
    }

    this.minutes++;
    this.setTime();
  }

  addFocus() {
    console.log('add focuse');
  }

}
