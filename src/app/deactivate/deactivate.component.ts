import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../deac-guard.service';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})
export class DeactivateComponent implements OnInit, CanComponentDeactivate {

  sfrm: FormGroup;
  constructor(private fb: FormBuilder){
    this.sfrm = this.fb.group({
      name:['']
    });
  }

  confirm() {
    return false
  }

  ngOnInit(): void {
  }

}
