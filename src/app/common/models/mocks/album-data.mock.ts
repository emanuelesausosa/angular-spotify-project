import { Album } from '../album.model';
import { Song } from '../song.model';

const SONGS: Song[] = [
  {
    num: 1,
    title: 'Cancion 1',
    featuring: 'Bon Jovi',
    description: 'Esta es una descripcion 1',
  },
  {
    num: 2,
    title: 'Cancion 2',
    featuring: 'Michael Jackson',
    description: 'Esta es una descripcion 2',
  },
  {
    num: 3,
    title: 'Cancion 3',
    featuring: 'Elton Jonh',
    description: 'Esta es una descripcion 3',
  },
];
export const ALBUM_DATA: Album = {
  year: 1999,
  title: 'Live At Fire Australia',
  imageUrl: 'https://picsum.photos/200/300',
  songs: SONGS,
};
