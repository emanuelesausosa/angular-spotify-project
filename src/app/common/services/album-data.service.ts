import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { ALBUM_DATA } from '../models/mocks/album-data.mock';
import { Song } from '../models/song.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumDataService {
  constructor(private http: HttpClient) {}

  private readonly baseUrl: string = 'http://localhost:1337';

  // 1. get all data
  getAllAlbum(): Observable<Album> {
    // <> -> mapping 
    // T (template) -> Generic
    return this.http.get<Album>(`${this.baseUrl}/albums`).pipe();
  }

  // 2. find song by id (num)
  getSongById(id: number): Song {
    return ALBUM_DATA.songs.find((t) => t.num === id);
  }

  // 3. add new song to data
  addNewSong(song: Song): boolean {
    // buscar dentro de ALBUM_DATA la última song
    // -: obtendremos el id de la ultima son
    try {
      let lastId =
        ALBUM_DATA.songs.length === 0
          ? 0
          : ALBUM_DATA.songs[ALBUM_DATA.songs.length - 1].num;
      song.num = lastId + 1;
      ALBUM_DATA.songs.push(song);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
