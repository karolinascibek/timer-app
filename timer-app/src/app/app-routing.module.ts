import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../layouts/welcome-layout/welcome-layout.module').then(m => m.WelcomeLayoutModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('../layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
