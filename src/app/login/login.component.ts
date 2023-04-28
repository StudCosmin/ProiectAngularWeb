import { Component } from '@angular/core';
//import {User} from "../models/users";
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  headerText: string = '';

  userFound: boolean = false;

  emailInput: string = '';
  passwordInput: string = '';

  newUserEmail = '';
  newUserPassword = '';

  usersFromDB: User[] = [];

  // usersFromDB: User[] = [];
  // validUser: User[] = [];

  // getUsers(){
  //   this.userService.getUsers().subscribe(result=>
  //   {
  //     this.usersFromDB = result;
  //   });
  // }
  //
  addUser(email: string, password: string){
    console.log(email);
    let newUser = {Email: email, Password: password};
    this.userService.addUser(newUser);
    this.headerText = "Account created successfully!"
  }
  //
  // queryUser(username: string, password: string): boolean {
  //   return this.userService.queryUser(username, password);
  // }

  // queryInput(username: string, password: string) {
  //   this.validUser = UserService.queryUser(username, password);
  // }

  // ALA BUN
  // queryUser(username: string, password: string): boolean {
  //   this.userFound = this.userService.queryUser(username, password);
  //   return this.userFound;
  // }

  queryUser(username: string, password: string) {
    this.userService.queryUser(username, password).subscribe(result => {
      this.usersFromDB = result;
    })
    // if (this.usersFromDB.length === 0) {
    //   this.headerText = "User not found!"
    // } else {
    //   this.headerText = "Welcome"
    // }
    this.checkUser();
  }

  checkUser(): void {
    if (this.usersFromDB.length === 0) {
      this.headerText = "User not found!"
    } else {
      this.headerText = "Welcome"
    }
  }

  logOut(): void {
    this.emailInput = '';
    this.passwordInput = '';
    this.headerText = "Successfully logged out!"
  }

}
