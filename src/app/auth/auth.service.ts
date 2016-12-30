import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthService  {
  isLogin:boolean = false;
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLogin = true);
  }

  logout(): void {
    this.isLogin = false;
  }
}