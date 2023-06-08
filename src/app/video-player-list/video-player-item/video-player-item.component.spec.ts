import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerItemComponent } from './video-player-item.component';

describe('VideoPlayerItemComponent', () => {
  let component: VideoPlayerItemComponent;
  let fixture: ComponentFixture<VideoPlayerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPlayerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
