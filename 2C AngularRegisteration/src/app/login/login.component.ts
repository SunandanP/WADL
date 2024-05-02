import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import User from '../User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    title = "Login Page";
    found:boolean = false;
    init:boolean = true;
   @Input() users!: User[];
   @Output() exit = new EventEmitter<boolean>();

   onExit(){
    this.exit.emit(false);
   }

   checkUser(email:string, password:string){
      this.init = false;
      for(let user of this.users){
        if(user.email == email && user.password == password){
          this.found = true;    
          return;
        }
      }

      this.found = false;
  }
}
