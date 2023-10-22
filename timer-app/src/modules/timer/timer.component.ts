import { Component, OnInit } from '@angular/core';
import { DialogComponent } from 'src/share/modules/dialog/dialog.component';
import { DialogService } from 'src/share/modules/dialog/services/dialog.service';
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [DialogService]
})
export class TimerComponent implements OnInit{

  constructor(private dialogService: DialogService) {}

  addSchedule(): void {
    this.dialogService.open(AddScheduleComponent);
  }

  ngOnInit(): void {}


}
