import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoPlayerListService } from '../video-player-list.service';

@Component({
  selector: 'app-video-player-item',
  templateUrl: './video-player-item.component.html',
  styleUrls: ['./video-player-item.component.scss']
})
export class VideoPlayerItemComponent implements OnInit {
  id: any;
  videoItem: any;
  player: any;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoPlayerListService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.videoService.getData().subscribe((res: any) =>  {
        res.results.forEach((data:any) => {
        if(data.media_id === this.id) {
          this.videoItem = data;
          console.log(this.videoItem);
        }
      })
      
    });

  }

  savePlayer(player: any) {
    this.player = player;
  }

}
