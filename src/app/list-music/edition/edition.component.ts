import { Component, OnInit } from '@angular/core';
import {MusicServiceService} from "../../music-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Music} from "../../../Model/music";

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  music: Music;

  /**
   * Component constructor
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly musicService: MusicServiceService
  ) {
    this.music = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.route.data.subscribe(( music: any) => (this.music = music.music));
  }

  submit(music: any) {
    this.musicService.update(music).subscribe(() => {
      this.router.navigate(['/listMusic']).then(r => null);
    });
  }

  cancel() {
    this.router.navigate(['/listMusic']).then(r => null);
  }

}
