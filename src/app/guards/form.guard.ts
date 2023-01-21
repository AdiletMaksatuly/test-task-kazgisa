import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {FormService} from "../services/form.service";

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanActivate {
  constructor(private formService: FormService, private router: Router,) {
  }

  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const newURL = state.url;

    if (newURL === '/second-step' && (this.formService.individualForm || this.formService.entityForm)) {
      return true;
    }

    if (newURL === '/third-step' && this.formService.file) {
      return true;
    }

    return this.router.parseUrl('first-step');
  }

}
