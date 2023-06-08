import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerItemComponent } from './video-player-list/video-player-item/video-player-item.component';
import { VideoPlayerListComponent } from './video-player-list/video-player-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'video_player_list', pathMatch: 'full'},
  {path: 'video_player_list', component: VideoPlayerListComponent},
  {path: 'video_player_list', children: [
    {path: 'video_player_item/:id', component: VideoPlayerItemComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VideoPlayerListComponent, VideoPlayerItemComponent]
