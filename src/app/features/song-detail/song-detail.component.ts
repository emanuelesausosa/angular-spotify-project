import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/common/models/song.model';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/common/models/album.model';
import { AlbumDataService } from 'src/app/common/services/album-data.service';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss'],
})
export class SongDetailComponent implements OnInit {
  // OnInit es interface, life-cicle hooks
  data: Album;
  song: Song;

  // vamos a inyectar un servicio -> DI - (Dependency Injection)
  constructor(
    private activedRoute: ActivatedRoute,
    private albumService: AlbumDataService
  ) {}

  ngOnInit(): void {
    const id = Number.parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    console.log(id);

    this.albumService.getAllAlbum().subscribe((album) => {
      this.song = album[0].songs.find((t) => t.num == id);
      console.log(this.song);
    });
  }
}
