import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { Song } from '../models/song.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AlbumDataService {
  constructor(private http: HttpClient) {}

  // 1. get all data
  getAllAlbum(): Observable<Album[]> {
    // <> -> mapping
    // T (template) -> Generic
    return this.http.get<Album[]>(`${environment.apiServer}/albums`).pipe();
  }

  addNewAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${environment.apiServer}/albums`, album);
  }

  // 2. find song by id (num)
  getSongById(id: number): Song {
    return null;
  }

  // 3. add new song to data
  addNewSong(song: Song): boolean {
    return true;
  }
}
