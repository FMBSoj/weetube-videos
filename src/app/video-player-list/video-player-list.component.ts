import { Component, OnInit } from '@angular/core';
import { VideoPlayerListService } from './video-player-list.service';

@Component({
  selector: 'app-video-player-list',
  templateUrl: './video-player-list.component.html',
  styleUrls: ['./video-player-list.component.scss']
})
export class VideoPlayerListComponent  implements OnInit {
    title = 'app-video-player';
    videos: any[] = [];
    // selected = false;
    searchInput: string = '';
    error: any;
  
    constructor(
        private videoService: VideoPlayerListService
      ) { }
  
    ngOnInit() {
      this.videoService.getData().subscribe((res:any)  => {
        this.videos = res.results;
      },
      (error) => {
        this.error = error;
      });

    }   

}
