import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultValue : string = "pet"; 
  suggestName = ""
  suggestUserName() {
    this.suggestName = 'Superuser';
  }

  onSubmit(formElements : NgForm)
  {
    console.log(formElements); 
    
  }

}
