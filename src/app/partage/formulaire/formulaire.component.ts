import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Music} from "../../../Model/music";
import {FormControl, FormGroup} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  form: FormGroup;
  @Input() musicModel: Music;
  // @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.musicModel = {
      style: []
    };
  }


  ngOnInit(): void {
    this.form.patchValue({
      id: this.musicModel.id,
      title: this.musicModel.title,
      description: this.musicModel.description,
      album: this.musicModel.album,
      artist: this.musicModel.artist,
      duration: this.musicModel.duration,
      date: this.musicModel.date,
      style: this.musicModel.style || [],
      picture: this.musicModel.picture
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(music: Music) { //Formulaire
    music.picture = this.musicModel.picture;
    this.submitEvent$.emit(music);
  }

  private static buildForm(): FormGroup {
    return new FormGroup({
/*
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
      description: new FormControl(''),
      album: new FormControl(''),
      artist: new FormControl('', Validators.required),
      duration: new FormControl(''),
      date: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
      style: new FormControl('')
*/
    });
  }
}
