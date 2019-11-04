import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;

  inputText:string="Initial Value";
 constructor(){
   this.user=new User();
  this.user.name="Foo Bar",
  this.user.designation="Software Developer",
  this.user.address="Jalihal, Bellary - 583117",
  this.user.phone=[
    '123-123-1345',
    '234-2432-4434',
    '124-234-4521'
  ]
 }
}
