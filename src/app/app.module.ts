import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// specifying our routes
const appRoutes : Routes = [
  // it will take key value pairs {path , component } 
  // the path we have used here is absolute path 
  // pathMatch is used to say angular whether we want full match or prefix match
  {path:'users' , component:UsersComponent , pathMatch:"full"} , // localhost:4200/users -> call users component
  {path:'home' , component:HomeComponent , pathMatch:"full"} , 
  {path:'servers' , component:ServersComponent , pathMatch:"full"} , 
  {path:'servers/:id/edit' , component:EditServerComponent , pathMatch:"full"} , 
  // path param - passing data in the url 
  {path : 'users/:id/:name' , component:UserComponent , pathMatch : "full"} ,
  {path:'' , component:HomeComponent} , 
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
  ],
  providers: [ServersService , RouterModule] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
