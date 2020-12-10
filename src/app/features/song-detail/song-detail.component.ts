import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/common/models/song.model';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/common/models/album.model';

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
  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number.parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    console.log(id);

    // busqueda
    // find me devuelve singular
    // filter, buscar criterios y devuelve un arreglo
    this.song = this.data.songs.find((t) => t.num === id);
    console.log(this.song);
  }
}
