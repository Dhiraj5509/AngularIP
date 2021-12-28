import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router , Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private router:Router , private activateRoute : ActivatedRoute) {
   
   }

  ngOnInit() {
  }
  loadServers()
  {
    // redirect user to servers route programatically
    // the path we have mentioned is relative  here 
    // '/'  means absolute , '' means relative
    this.router.navigate(['servers'] , {
      relativeTo : this.activateRoute
    }) ; 
  }
}
