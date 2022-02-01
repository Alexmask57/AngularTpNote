import { Component, OnInit } from '@angular/core';
import {Music} from "../../../Model/music";
import {MatDialogRef} from "@angular/material/dialog";

export type PopupAction = Music & {mode: string};

@Component({
  selector: 'app-ajout-popup',
  templateUrl: './ajout-popup.component.html',
  styleUrls: ['./ajout-popup.component.scss']
})
export class AjoutPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjoutPopupComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(result: Music & {mode?: string} | null = null) {
    this.dialogRef.close(result);
  }

  onCancel() {
    this.closeDialog();
  }

  onCreate(music: Music) {
    this.closeDialog({...music, mode: 'create'});
  }

  onUpdate(music: Music) {
    this.closeDialog({...music, mode: 'update'});
  }

}
