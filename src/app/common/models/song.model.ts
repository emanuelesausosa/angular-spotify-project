export interface Song {
  id: number;
  num: number;
  title: string;
  featuring: string;
  description: string;
  albumId: number;
  published_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
