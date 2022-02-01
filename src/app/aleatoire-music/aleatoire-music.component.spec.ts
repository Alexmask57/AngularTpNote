import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleatoireMusicComponent } from './aleatoire-music.component';

describe('AleatoireMusicComponent', () => {
  let component: AleatoireMusicComponent;
  let fixture: ComponentFixture<AleatoireMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AleatoireMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleatoireMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
