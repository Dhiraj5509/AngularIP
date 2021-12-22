import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({

  // we use declarations to let know which components are we using
  declarations: [
    AppComponent , 
    ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  // which component/s should bootstrap be aware of at the time of start-up
  bootstrap: [AppComponent]
})
export class AppModule { }
