import { Component } from '@angular/core';
import { ALBUM_DATA } from '../../common/models/mocks/album-data.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  songDetail: any;
  albumModel: any = ALBUM_DATA;

  constructor(private router: Router) {}

  viewSongDetail(song: any): void {
    this.router.navigate(['/song', song.num]);
  }
}
