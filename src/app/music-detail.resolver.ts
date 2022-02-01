import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Music} from "../Model/music";
import {MusicServiceService} from "./music-service.service";

@Injectable({
  providedIn: 'root'
})
export class MusicDetailResolver implements Resolve<Music> {

  constructor(private readonly musicService: MusicServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Music> {
    const musicId: string | null = route.paramMap.get('id');
    if(musicId != null){
      return this.musicService.fetchOne(musicId);
    }
    else
      return new Observable<Music>();
  }

}
