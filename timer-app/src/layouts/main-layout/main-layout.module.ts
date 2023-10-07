import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ClockComponent } from './components/clock/clock.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavLinkComponent } from './components/side-nav/components/nav-link/nav-link.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ClockComponent,
    SideNavComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    MatIconModule
  ]
})
export class MainLayoutModule { }
