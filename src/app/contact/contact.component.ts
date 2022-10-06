import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { contact } from './contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  powers = ['Male','Female','Others'];
  model = new contact('','',this.powers[4], '','');

  newform(): void{
    this.model = new contact('' , '' , '' , ''  , '');
  }
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
