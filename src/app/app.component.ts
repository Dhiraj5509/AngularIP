import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultValue : string = "pet"; 
  genders = ['male' , 'female'] ; 
  suggestName = ""
  user : {
    userName : string , 
    userEmail : string , 
    gender : string , 
    secretQuestion : string
  } = {
    userName : '' , 
    userEmail :' ' , 
    gender : '' , 
    secretQuestion : ''
  }
  suggestUserName() {
    this.suggestName = 'Superuser';
  }

  onSubmit(formElements : NgForm)
  {
    console.log(formElements); 
    this.user.userName = formElements.value.uData.username ; 
    this.user.userEmail = formElements.value.uData.email ; 
    this.user.secretQuestion = formElements.value.secret ; 
    this.user.gender = formElements.value.gender ; 
   
  }
}
