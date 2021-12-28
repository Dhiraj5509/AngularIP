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

  // params - path param
  // queryParams
  // fragement
  ngOnInit() {
    this.user = {
      name : this.activatedRoute.snapshot.params['name'] , 
      id : this.activatedRoute.snapshot.params['id'] 
    }
  }

}
