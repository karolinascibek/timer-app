import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeLayoutComponent } from './welcome-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeLayoutRoutingModule { }
