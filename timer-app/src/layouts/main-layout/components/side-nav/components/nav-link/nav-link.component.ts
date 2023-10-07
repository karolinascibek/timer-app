import { Component, Input } from '@angular/core';
import { NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {

  @Input() navLink!: NavLink;
  @Input() isWrap: boolean = false;
}
