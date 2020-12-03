import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { ALBUM_DATA } from '../models/mocks/album-data.mock';
import { Song } from '../models/song.model';

@Injectable({ providedIn: 'root' })
export class AlbumDataService {
  constructor() {}

  // 1. get all data
  getAllAlbum(): Album {
    return ALBUM_DATA;
  }

  // 2. find song by id (num)
  getSongById(id: number): Song {
    return ALBUM_DATA.songs.find((t) => t.num === id);
  }

  // 3. add new song to data
}
