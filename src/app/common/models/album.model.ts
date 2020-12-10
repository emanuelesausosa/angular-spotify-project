import { Song } from './song.model';
export interface Album {
  id: number;
  year: number;
  title: string;
  imageUrl: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  songs: Song[];
}
