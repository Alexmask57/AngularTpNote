import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMusicComponent} from "./list-music/list-music.component";
import {AleatoireMusicComponent} from "./aleatoire-music/aleatoire-music.component";
import {EditionComponent} from "./list-music/edition/edition.component";
import {MusicDetailResolver} from "./music-detail.resolver";

const routes: Routes = [
  { path: '', redirectTo: 'listMusic', pathMatch: 'full' },
  {path:'listMusic', component: ListMusicComponent},
  {path:'aleatoireMusic', component: AleatoireMusicComponent},
  { path: 'edit/:id', component: EditionComponent, resolve: { music: MusicDetailResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
