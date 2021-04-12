import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlackPipe } from './black.pipe';
import { ReversestringPipe } from './reversestring.pipe';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { NextComponent } from './next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    BlackPipe,
    ReversestringPipe,
    DeactivateComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
