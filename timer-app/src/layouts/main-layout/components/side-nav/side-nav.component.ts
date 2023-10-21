import { Component, OnInit } from '@angular/core';
import { NavLink } from './models/nav-link.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  navLinks: NavLink[] = [
    { icon: 'home', path: 'dashboard', name: "Dashboard", isSelected: true },
    { icon: 'settings', path: 'settings', name: "Ustawienia", isSelected: false },
    { icon: 'add', path: 'timer', name: "Planer", isSelected: false },
  ];


  selectedTab!: NavLink;

  isWrap: boolean = true;

  ngOnInit(): void {
    this.selectedTab = this.navLinks[0];
  }

  selectTab(tab: NavLink): void {
    this.selectedTab.isSelected = false;
    this.selectedTab = tab;
    this.selectedTab.isSelected = true;
  }

  wrapSideNav(): void {
    this.isWrap = !this.isWrap;
  }

}
