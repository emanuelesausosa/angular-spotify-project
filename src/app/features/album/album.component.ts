import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/common/models/album.model';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  songDetail: any;
  @Input() albumModel: Album;

  constructor(private router: Router) {}

  viewSongDetail(song: any): void {
    this.router.navigate(['/song', song.num]);
  }
}
