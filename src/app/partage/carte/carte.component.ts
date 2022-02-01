import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Music} from "../../../Model/music";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  @Input() music: Music;

  @Output('musicDelete') delete$: EventEmitter<any> = new EventEmitter();

  @Output('musicUpdate') update$: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.music = {};
  }

  ngOnInit(): void {
  }

  delete() {
    this.delete$.emit(this.music);
  }

  update() {
    this.update$.emit(this.music);
  }

}
