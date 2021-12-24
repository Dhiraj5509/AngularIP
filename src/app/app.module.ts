import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReceipeDetailComponent } from './recipes/receipe-detail/receipe-detail.component';
@NgModule({

  // we use declarations to let know which components are we using
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ReceipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  // which component/s should angular be aware of at the time of start-up
  // we can use as many number of component we want , but it is conventional to use only our main AppComponent 
  bootstrap: [AppComponent] 
})
export class AppModule { 
  
}
