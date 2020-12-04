import { Component, OnInit } from '@angular/core';
import { ALBUM_DATA } from '../../common/models/mocks/album-data.mock';
import { Router } from '@angular/router';
import { AlbumDataService } from 'src/app/common/services/album-data.service';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  songDetail: any;
  albumModel: any;

  constructor(
    private router: Router,
    private albumDataService: AlbumDataService
  ) {}
  ngOnInit(): void {
    this.albumModel = this.albumDataService.getAllAlbum();
  }

  viewSongDetail(song: any): void {
    this.router.navigate(['/song', song.num]);
  }
}
