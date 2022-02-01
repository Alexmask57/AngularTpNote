import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Music} from "../../Model/music";
import {MusicServiceService} from "../music-service.service";
import {mergeMap} from "rxjs";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";

@Component({
  selector: 'list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {

  private addDialog: MatDialogRef<AjoutPopupComponent> | any;
  listMusic: Music[] = [];
  columnMusic: string[] = ['id', 'title', 'album', 'artist', 'duration'];
  view: string = 'card';
  dialogStatus = 'inactive';

  constructor(
    private readonly musicService: MusicServiceService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit():void {
    this.musicService.fetch().subscribe(list => {
      this.listMusic = list || [];
    });
  }

  delete(music:Music) {

    this.musicService.delete(music.id!).subscribe(() => {
      this.musicService.fetch().subscribe(list => {
        this.listMusic = list || [];
      });
    });
  }

  add(music: Music) {
    this.musicService.create(music).subscribe(music => {
      this.listMusic.push(music);
      this.hideDialog();
    });
  }

  update(music:Music) {
    this.musicService
      .update(music)
      .pipe(mergeMap(() => this.musicService.fetch()))
      .subscribe(music => {
        //this.music = music;
        this.hideDialog();
      });
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person: any) => {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  /*filter($event) {
    console.log("coucou");
  }*/

  hideDialog() {
    this.dialogStatus = 'inactive';
    if (this.addDialog != undefined) {
      this.addDialog.close();
    }
  }

  switchView() {
    if (this.view === "card") {
      this.view = "list"
    } else {
      this.view = "card";
    }
  }

}
