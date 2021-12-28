import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // using ActivatedRoute , we can access the data passes using path param
    this.user = {
      id : this.activatedRoute.snapshot.params['id'] , 
      name : this.activatedRoute.snapshot.params['name'] 
    }
    // if we request the same component again , angular doesn't re-instantiate it 
    // in our case the query parameters change , but the component isn't changed
    // therefore in order to have an updated params , we can have a callback  , and if the params changes the callback will be called 
    this.activatedRoute.params.subscribe( (params : Params)=>{
      this.user.id = params['id']
      this.user.name = params['name']
    } );
      
  }

}
