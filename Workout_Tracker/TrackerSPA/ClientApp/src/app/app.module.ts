import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { WorkoutService } from './workout.service';
import { ListCategoryComponent } from './Categories/list-category/list-category.component';
import { DeleteCategoryComponent } from './Categories/delete-category/delete-category.component';
import { AddCategoryComponent } from './Categories/add-category/add-category.component';
import { EditCategoryComponent } from './Categories/edit-category/edit-category.component';
import { SearchCategoryComponent } from './Categories/search-category/search-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryComponent,
    SearchCategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'list-Category', component: ListCategoryComponent },
      { path: 'delete-Category/:id', component: DeleteCategoryComponent },
      { path: 'add-Category', component: AddCategoryComponent },
      { path: 'edit-Category/:id', component: EditCategoryComponent },
      { path: 'search-Category', component: SearchCategoryComponent },
      {path:'', redirectTo:'list-category',pathMatch:'full'}
    ])
  ],
  providers: [WorkoutService],
  bootstrap: [ListCategoryComponent]
})
export class AppModule { }
