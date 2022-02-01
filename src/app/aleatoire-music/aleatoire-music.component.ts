import { Component, OnInit } from '@angular/core';
import {Music} from "../../Model/music";
import {MusicServiceService} from "../music-service.service";

@Component({
  selector: 'aleatoire-music',
  templateUrl: './aleatoire-music.component.html',
  styleUrls: ['./aleatoire-music.component.scss']
})
export class AleatoireMusicComponent implements OnInit {

  randomMusic!: Music;

  constructor(private readonly musicService: MusicServiceService) {
    this.random();
  }

  ngOnInit(): void {
  }

  random() {
    this.musicService.fetchRandom().subscribe(music => {
      this.randomMusic = music;
    });
  }

  delete(music: Music) {
    this.musicService.delete(music.id!).subscribe(() => {
      this.random();
    })
  }

}
