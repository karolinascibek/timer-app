import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/core/auth/guards/auth.guard';
import { unauthGuard } from 'src/core/auth/guards/unauth.guard';
import { ErrorLayoutComponent } from './error-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modules/error/error.module').then(m => m.ErrorModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ErrorLayoutRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
