import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/core/auth/guards/auth.guard';
import { unauthGuard } from 'src/core/auth/guards/unauth.guard';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('../layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule),
  },
  {
    path: 'welcome',
    canActivate: [unauthGuard],
    loadChildren: () => import('../layouts/welcome-layout/welcome-layout.module').then(m => m.WelcomeLayoutModule),
  },

  {
    path: 'error',
    loadChildren: () => import('../layouts/error-layout/error-layout.module').then(m => m.ErrorLayoutModule),
  },

  {
    path: '**',
    redirectTo: 'error',
  }
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
