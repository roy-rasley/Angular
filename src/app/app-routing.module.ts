import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {path:'firstComponent',component:FirstComponentComponent},
  {path:'secondComponent', component:SecondComponentComponent},
  {path: 'thirdComponent',component:MovieTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
