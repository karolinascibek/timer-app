import { Component, OnInit } from '@angular/core';
import { NavLink } from './models/nav-link.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  navLinks: NavLink[] = [
    { icon: 'settings', path: 'settings', name: "Ustawienia", isSelected: false },
    { icon: 'add', path: '', name: "Plan", isSelected: false },
  ];


  selectedTab!: NavLink;

  isWrap: boolean = false;

  ngOnInit(): void {
    this.selectedTab = this.navLinks[1];
    this.selectedTab.isSelected = true;
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
