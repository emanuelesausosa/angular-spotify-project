import { Component } from '@angular/core';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  albumModel: any = {
    year: 1999,
    title: 'Live At Fire Australia',
    songs: [
      {
        num: 1,
        title: 'Cancion 1',
        featuring: 'Bon Jovi',
      },
      {
        num: 2,
        title: 'Cancion 2',
        featuring: 'Bon Jovi',
      },
      {
        num: 3,
        title: 'Cancion 3',
        featuring: 'Elton Jonh',
      },
    ],
  };
}
