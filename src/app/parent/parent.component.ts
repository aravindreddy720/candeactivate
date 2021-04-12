import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message: string='';

  name! : FormGroup;

  name1= "";

  constructor(private siri: FormBuilder, private ref:SharedService){
    this.createForm();
  }
method(){
  this.ref.display=this.name1;
}
  createForm(){

    this.name= this.siri.group({
      name: ["", Validators.required]

    })

}
}
