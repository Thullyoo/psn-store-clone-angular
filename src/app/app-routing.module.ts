import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesContentComponent } from './pages/games-content/games-content.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:  HomeComponent
  },
  {
    path:'content/:id',
    component: GamesContentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
