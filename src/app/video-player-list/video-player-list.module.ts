import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoPlayerItemComponent } from './video-player-item/video-player-item.component';



@NgModule({
  declarations: [
    VideoPlayerItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxYoutubePlayerModule,
    FormsModule
  ]
})
export class VideoPlayerListModule { }
