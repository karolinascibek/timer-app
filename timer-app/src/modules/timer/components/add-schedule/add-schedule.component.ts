import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Schedule } from 'src/share/models/schedule.model';
import { DialogService } from 'src/share/modules/dialog/services/dialog.service';
import { InputTime } from 'src/share/modules/form/models/input-time.models';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent implements OnInit, OnDestroy {

  now: Date = new Date();
  schedule!: Schedule;

  subscribtion: Subscription = new Subscription();

  constructor(
    private readonly dialogService: DialogService
  ){}

    ngOnInit(): void {

      const timeStop = this.addMinutesToDate(this.now, 45);

      this.schedule = {
        dateStart: this.now,
        dateStop: timeStop,
        title: "Tytuł zdarzenia",
        description: 'Opis zdarzenia',
        isCompleted: false,
      }

      console.log({msg: 'Add Schedule: on init'})
        const saveEventSubscribe = this.dialogService.saveEvent$.subscribe((res)=>{
          console.log({save: res});
          this.dialogService.open = false;
        })

        const deleteEventSubscribe = this.dialogService.deleteEvent$.subscribe((res)=>{
          console.log({delete: res});
          this.dialogService.open = false;
        });

        this.subscribtion.add(saveEventSubscribe);
        this.subscribtion.add(deleteEventSubscribe);
    }

    addMinutesToDate(date: Date, minutes: number): Date {
      const copyDate = new Date(date);
      copyDate.setMinutes(copyDate.getMinutes() + minutes);
      return copyDate;
    }

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

    ngOnDestroy(): void {
        this.subscribtion.unsubscribe();
    }

}
