import {Component, OnInit} from '@angular/core';
import {Music} from "../../Model/music";
import {MusicServiceService} from "../music-service.service";

@Component({
  selector: 'list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {

  listMusic: Music[] = [];
  view:string = 'card';

  constructor(private readonly musicService: MusicServiceService) {
  }

  ngOnInit(): void {
    this.musicService.fetch().subscribe(list =>{
      this.listMusic = list || [];
      console.log(list);
    });
  }

  delete(music: Music) {
    /*this.listPersonnelService.delete(person.id!).subscribe(personnel => {
      this.personnel = personnel;
      this.listPersonnelService.updatedEmployeeList(person.id!);
      this.cdr.markForCheck();
    });*/
  }

  add(music: Music) {
    /*this.listPersonnelService
      .create(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
        this.personnel = personnel;
        this.hideDialog();
      });*/
  }

  update(music: Music) {
    /*this.listPersonnelService
      .update(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
        this.personnel = personnel;
        this.hideDialog();
      });*/
  }

  switchView() {
    if(this.view==="card"){
      this.view = "list"
    }
    else{
      this.view = "card";
    }
  }

}
