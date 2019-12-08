import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GitPageComponent } from './git-page/git-page.component';
import{SearchComponent} from './search/search.component';




const routes: Routes = [
  {path:"git", component:GitPageComponent},
  {path:"search",component:SearchComponent},

  {path:"",pathMatch:"full",redirectTo:"git"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
