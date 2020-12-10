import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumDataService } from 'src/app/common/services/album-data.service';
import { Album } from 'src/app/common/models/album.model';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  songDetail: any;
  albumModel: Album;

  constructor(
    private router: Router,
    private albumDataService: AlbumDataService
  ) {}
  ngOnInit(): void {
    // this.albumModel =
    this.albumDataService.getAllAlbum().subscribe((data) => {
      this.albumModel = data[0];
    });
  }

  viewSongDetail(song: any): void {
    this.router.navigate(['/song', song.num]);
  }
}
