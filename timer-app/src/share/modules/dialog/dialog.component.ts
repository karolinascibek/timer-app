import { ViewContainerRefDirective } from './../../directives/view-container-ref.directive';
import { AfterViewInit, Component, OnInit, Type, ViewChild } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],

})
export class DialogComponent<T = unknown > implements OnInit, AfterViewInit{

  private closeSubject: Subject<boolean> = new Subject();
  public closeSubject$: Observable<boolean> = this.closeSubject.asObservable();

  @ViewChild(ViewContainerRefDirective, {static: true}) viewContainerRefDirective!: ViewContainerRefDirective;

  componentType!: Type<T>;


  ngOnInit(): void {
    console.log({onInitbtn: false})
    this.closeSubject.next(false);
  }

  ngAfterViewInit(): void {
    const viewContainerRef = this.viewContainerRefDirective.viewContainerRef;
    console.log({dv: this.componentType, viewContainerRef})

    viewContainerRef.createComponent(this.componentType);
  }

  close(): void {
    this.viewContainerRefDirective.viewContainerRef.clear();
    this.closeSubject.next(true);
  }
}
