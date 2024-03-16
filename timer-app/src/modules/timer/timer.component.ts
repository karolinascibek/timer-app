import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogComponent } from 'src/share/modules/dialog/dialog.component';
import { DialogService } from 'src/share/modules/dialog/services/dialog.service';
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [DialogService]
})
export class TimerComponent implements OnInit, OnDestroy{

  subscriptions: Subscription = new Subscription();

  constructor(private dialogService: DialogService<AddScheduleComponent>) {}

  get isOpenDialog(): boolean {
    return this.dialogService.open;
  }

  addSchedule(): void {
    this.dialogService.openDialog(AddScheduleComponent);
  }

  ngOnInit(): void {
    const saveEventSubscribe = this.dialogService.saveEvent$.subscribe((res)=>{
      console.log({msg: 'timer component save ', res})
    });

    const deleteEventSubscribe = this.dialogService.deleteEvent$.subscribe((res)=>{
      console.log({msg: 'timer component delete ', res})
    });

    this.subscriptions.add(saveEventSubscribe);
    this.subscriptions.add(deleteEventSubscribe);
    this.dialogService.openDialog(AddScheduleComponent);
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }


}
