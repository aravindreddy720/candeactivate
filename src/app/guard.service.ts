import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ChildComponent } from './parent/child/child.component';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanDeactivate<ChildComponent>{



  constructor() { }
  canDeactivate(component: ChildComponent): boolean  {
  return true;
  }
}
