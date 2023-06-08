import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerListService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('https://list.ly/api/v4/search/video?q=basketball');
  }
}