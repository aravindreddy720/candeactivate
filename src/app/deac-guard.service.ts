import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NextComponent } from './next/next.component';


export interface CanComponentDeactivate {
  confirm(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeacGuardService implements CanDeactivate<CanComponentDeactivate>{

  canDeactivate(component: CanComponentDeactivate): boolean| any{
    
    if(!component.confirm()) {
          if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
          return true;
        } else {
          return false;
        }
      }
  }

  constructor() { }
}
