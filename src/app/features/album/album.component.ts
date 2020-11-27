import { Component } from '@angular/core';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  songDetail: any;
  albumModel: any = {
    year: 1999,
    title: 'Live At Fire Australia',
    songs: [
      {
        num: 1,
        title: 'Cancion 1',
        featuring: 'Bon Jovi',
        description: 'Esta es una descripcion 1',
      },
      {
        num: 2,
        title: 'Cancion 2',
        featuring: 'Bon Jovi',
        description: 'Esta es una descripcion 2',
      },
      {
        num: 3,
        title: 'Cancion 3',
        featuring: 'Elton Jonh',
        description: 'Esta es una descripcion 3',
      },
    ],
  };

  viewSongDetail(song: any): void {
    this.songDetail = song;
  }
}
