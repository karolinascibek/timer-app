import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAuth$: Observable<boolean> = this._isAuth.asObservable();

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  set isAuth(value: boolean) {
    this._isAuth.next(value);
    this.localStorageService.auth = `${value}`;
  }

  get isAuth(): boolean {
    return this._isAuth.getValue() || this.localStorageService.auth ;
  }

  goToUnauthPage(): void {
    this.localStorageService.removeAuth();
    this.router.navigate(['welcome']);
  }

  goToAuthPage(): void {
    this.router.navigate(['']);
  }
}
