import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Music} from "../Model/music";

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  private url = "http://localhost:3000";

  constructor(private readonly http: HttpClient) {
  }

  fetch(): Observable<Music[]>{
    return this.http.get<Music[]>(this.url+'/musics');
  }

  fetchRandom(): Observable<Music> {
    return this.http.get<Music>(this.url+'/musics/random');
  }

  fetchOne(id: string): Observable<Music> {
    return this.http.get<Music>(this.url+'/musics/'+id);
  }

  search(name: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.url+'/musics/title/'+name);
  }

  create(newMusic: Music): Observable<Music> {
    return this.http.post<Music>(this.url+'/musics', newMusic);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.url+'/musics/'+id);
  }

  update(updateMusic: Music): Observable<Music> {
    return this.http.put(this.url+'/musics/'+updateMusic.id, updateMusic);
  }

}
