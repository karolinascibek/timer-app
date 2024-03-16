import { ViewContainerRefDirective } from './../../directives/view-container-ref.directive';
import { AfterViewInit, Component, OnInit, Type, ViewChild, ComponentRef, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],

})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy{

  private componentRef!: ComponentRef<unknown>;
  private subscriptionOpenDialog!: Subscription;

  @Input() header: string = '';

  @ViewChild(ViewContainerRefDirective, {static: true}) viewContainerRefDirective!: ViewContainerRefDirective;

  constructor( private readonly dialogService: DialogService) {}

  ngOnInit(): void {

    this.subscriptionOpenDialog = this.dialogService.openEvent$.subscribe({
      next: (isOpen) =>{
        if(isOpen) this.createComponent();
        else this.closeDialog();
      },
      error: () =>{}
    });
  }

  ngAfterViewInit(): void {}

  save() {
    console.log({msg: 'clicked save'})
    this.dialogService.save = true;
  }

  delete() {
    console.log({msg: 'clicked delete'})
    this.dialogService.delete = true;
  }

  cancel() {
    this.close();
  }

  createComponent(): ComponentRef<unknown> {
    return  this.viewContainerRefDirective.viewContainerRef.createComponent(this.dialogService.componentType);
  }

  closeDialog(): void {
    if(this.componentRef) {
      this.componentRef.destroy();
    }

    if(this.subscriptionOpenDialog) {
      this.subscriptionOpenDialog.unsubscribe();
    }
  }

  close(): void {
    this.viewContainerRefDirective.viewContainerRef.clear();
    this.dialogService.open = false;
  }

  ngOnDestroy(): void {
    console.log({m: 'destroj dialog'});
    this.subscriptionOpenDialog.unsubscribe();
  }
}
