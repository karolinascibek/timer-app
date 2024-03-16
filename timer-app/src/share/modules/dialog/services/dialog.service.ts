
import { ApplicationRef, ComponentRef, Injectable, Type, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DialogComponent } from '../dialog.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class DialogService<T = Type<unknown>>{
  private componentRef!: ComponentRef<T>;

  private _open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public openEvent$: Observable<boolean> = this._open.asObservable();

  private _save: Subject<boolean> = new Subject();
  public saveEvent$: Observable<boolean> = this._save.asObservable();

  private _delete: Subject<boolean> = new Subject();
  public deleteEvent$: Observable<boolean> = this._delete.asObservable();


  private _componentType!: Type<unknown>;

  constructor(){}

  set open(open: boolean) {
    this._open.next(open);
  }

  get open() {
    return this._open.getValue();
  }

  get componentType() {
    return this._componentType;
  }

  set delete(isDelete: boolean) {
    this._delete.next(isDelete);
  }

  set save(isSave: boolean) {

    console.log({saveEvent: 'dialog service save'})
    this._save.next(isSave);
  }

  openDialog(component: Type<unknown>, option?: any): void {
    this._componentType = component;
    this.open = true;
  }
}
