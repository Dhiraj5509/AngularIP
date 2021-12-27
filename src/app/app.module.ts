import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router , RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

// specifying our routes
const appRoutes : Routes = [
  // it will take key value pairs {path , component } 
  {path:'users' , component:UsersComponent}  , // localhost:4200/users -> call users component
  {path:'home' , component:HomeComponent} , 
  {path:'' , component:HomeComponent} , 
  {path:'servers' , component:ServersComponent} , 
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
