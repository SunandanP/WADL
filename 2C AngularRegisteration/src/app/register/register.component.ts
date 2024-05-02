import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import User from '../User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    @Input() users!: User[];
    @Output() changed = new EventEmitter<User[]>();

    @Output() exit = new EventEmitter<boolean>();

   onExit(){
    this.exit.emit(false);
   }


    title = 'AngularRegisteration';
    name = '';
    email = '';
    password = '';
    contact = '';
    error = false;
    submitted = false;

        register(name:string, email:string, contact:string, password:string, confirmPassword:string){
          if(password == confirmPassword){
            this.users.push({name: name, email: email, contact: contact, password: password});
            this.name = name;
            this.email = email;  
            this.contact = contact;
            this.password = password;
            this.submitted = true;
          }
          else{
            this.error = true;
        }

        console.log(this.users);
        this.changed.emit(this.users);
        console.log("Changes emitted");
      }
}
