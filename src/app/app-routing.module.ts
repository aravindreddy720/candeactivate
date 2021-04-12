import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { DeacGuardService } from './deac-guard.service';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { GuardService } from './guard.service';
import { NextComponent } from './next/next.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: "parent",
    component: ParentComponent,  canDeactivate: [GuardService],
    children:[
      {
        path: "child",
        component: ChildComponent,
      }
    ]
  },
  {path: "deactivate", component: DeactivateComponent, canDeactivate: [DeacGuardService]},
  {path: "next", component: NextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
