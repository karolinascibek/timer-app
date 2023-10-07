import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent  implements OnInit {

  date:Date = new Date();

  ngOnInit(): void {
      const source = interval(1000);

      source.subscribe(()=>{
        this.date = new Date();
      })
  }

}
