import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  display1:string='';
  constructor(private ref: SharedService) { 
    this.display1=this.ref.display
  }



  ngOnInit(): void {
  }

}
