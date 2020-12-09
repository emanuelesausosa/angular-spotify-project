import { Song } from './song.model';
export interface Album {
  id: number;
  year: number;
  title: string;
  imageUrl: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  songs: Song[];
}
