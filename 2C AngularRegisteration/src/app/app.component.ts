import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { RegisterComponent } from './register/register.component';
import User from './User';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoginComponent, DisplayComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    title="Main Landing Page";
    login = false;
    display = false;
    register = false;
    
    users: User[] = [];

    navigateToRegister(){
        this.register = true;
        this.display = false;
        this.login = false;
    }

    navigateToLogin(){
        this.login = true;
        this.display = false;
        this.register = false;
    }

    navigateToDisplay(){
        this.display = true;
        this.login = false;
        this.register = false;
    }

    changesFromRegister(users: User[]){
        if(users !== this.users){
            this.users = users;
        }

        console.log("Changes received", this.users);
    }

    exitFromDisplay(display:boolean){
        this.display = display;
        console.log("Changes received", this.display);
    }

    exitFromLogin(login:boolean){
        this.login = login;
        console.log("Changes received", this.login);
    }

    exitFromRegister(register:boolean){
        this.register = register;
        console.log("Changes received", this.register);
    }

}
