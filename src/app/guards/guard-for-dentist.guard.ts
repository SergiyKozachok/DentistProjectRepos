import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, Observer, Subject} from 'rxjs';
import { UserService } from '../services/user.service';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ForDentistGuard implements CanActivate {
  constructor(private user: UserService) {
  }

  public canActivate(next: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.user.getUserLoggedIn();
  }
}
