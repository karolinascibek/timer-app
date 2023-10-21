import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get auth(): boolean {
    const isAuth = localStorage.getItem('auth');
    return isAuth && isAuth === 'true' ? true : false;
  }

  set auth(value: string) {
    localStorage.setItem('auth', value);
  }

  removeAuth() {
    localStorage.removeItem('auth');
  }
}
