
import { ApplicationRef, ComponentRef, Injectable, Type } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DialogComponent } from '../dialog.component';

@Injectable()
export class DialogService<T = Type<unknown>> {
  private componentRef!: ComponentRef<T>;

  constructor(
    private applicationRef: ApplicationRef,
  ) { }

  private get rootCompoentRef(): ComponentRef<any> {
    return this.applicationRef.components[0];
  }

  private createComponent(component: Type<any>) {

    const appComponent: AppComponent = this.rootCompoentRef.instance;
    return appComponent.viewContainerRefDirective.viewContainerRef.createComponent(component);
  }

  open(component: Type<any>, option?: any): void {
    this.componentRef = this.createComponent(DialogComponent<T>) ;
    const componentType = this.componentRef.instance as DialogComponent<T>;
    componentType.componentType = component;

    const btnCloseSubscribe = componentType.closeSubject$.subscribe((close)=>{
      if(close) {
        this.componentRef.destroy();
      }
    })

    this.componentRef?.onDestroy(()=> {
      this.applicationRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      btnCloseSubscribe.unsubscribe();
    })
  }
}
