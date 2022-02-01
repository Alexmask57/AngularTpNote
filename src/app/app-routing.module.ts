import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListMusicComponent} from "./list-music/list-music.component";
import {AleatoireMusicComponent} from "./aleatoire-music/aleatoire-music.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'listMusic', component: ListMusicComponent},
  {path:'aleatoireMusic', component: AleatoireMusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
