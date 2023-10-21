import { Component } from '@angular/core';
import { AuthService } from 'src/core/auth/services/auth.service';

@Component({
  selector: 'app-welcome-layout',
  templateUrl: './welcome-layout.component.html',
  styleUrls: ['./welcome-layout.component.scss']
})
export class WelcomeLayoutComponent {

  constructor (
    private authService: AuthService,
  ) {}

  goToApp(): void {

    console.log({msg: "strat app"})
    this.authService.isAuth = true;
    this.authService.goToAuthPage();
  }

}
