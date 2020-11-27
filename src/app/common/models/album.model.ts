import { Song } from './song.model';
export interface Album {
  year: number;
  title: string;
  songs: Song[];
}
