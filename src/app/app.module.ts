import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({

  // we use declarations to let know which components are we using
  declarations: [
    AppComponent , 
    WarningAlertComponent , 
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  // which component/s should angular be aware of at the time of start-up
  // we can use as many number of component we want , but it is conventional to use only our main AppComponent 
  bootstrap: [AppComponent] 
})
export class AppModule { }
