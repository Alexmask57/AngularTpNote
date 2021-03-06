import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Music} from "../../../Model/music";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  form: FormGroup;
  @Input() musicModel: Music;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.musicModel = {
      styles: []
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
      styles: this.musicModel.styles || [],
      picture: this.musicModel.picture
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(music: Music) {
    music.picture = this.musicModel.picture;
    this.submitEvent$.emit(music);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.musicModel.styles!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.musicModel.styles!.indexOf(titre);
    this.musicModel.styles!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.musicModel.picture = reader.result;
      }
    }
  }

  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      description: new FormControl(''),
      album: new FormControl(''),
      artist: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      duration: new FormControl(''),
      date: new FormControl(''),
      styles: new FormControl('')
    });
  }
}
