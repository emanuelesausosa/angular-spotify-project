import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailModalComponent } from './song-detail-modal.component';

describe('SongDetailModalComponent', () => {
  let component: SongDetailModalComponent;
  let fixture: ComponentFixture<SongDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
