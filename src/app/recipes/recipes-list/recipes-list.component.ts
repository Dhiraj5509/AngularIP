import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // recipe list will hold the recipe array
  recipes : Recipe[] = [
    new Recipe("Pauva" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxEPI2Y7iUHWrqA-TDtwUb9u457xzDGjXnqb03XdLyIjuT9JPWbPS-bIKKoNCn7RUPgc&usqp=CAU" , "Prepare Very Very Dilicious Pauva in a go!") , 

    new Recipe("Aloo Paratha" , "https://media.istockphoto.com/photos/aloo-paratha-with-lassi-indian-potato-stuffed-flatbread-with-butter-picture-id1189080088?k=20&m=1189080088&s=612x612&w=0&h=spqEDquN7g83nG-SX-5hBIMzEpaD9xgHN3RryWzoS0A=" , "Punjab's special") 
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
