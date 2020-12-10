import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { Song } from '../models/song.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumDataService {
  constructor(private http: HttpClient) {}

  private readonly baseUrl: string = 'http://localhost:1337';

  // 1. get all data
  getAllAlbum(): Observable<Album[]> {
    // <> -> mapping
    // T (template) -> Generic
    const url = `${this.baseUrl}/albums`;
    console.log(url);

    fetch(url)
      .then((response) => response)
      .then((data) => {
        console.log(data);
      });

    return this.http
      .get<Album[]>(url)
      .pipe(this.handleError<Album[]>('getAllAlbum', []));
  }

  // 2. find song by id (num)
  getSongById(id: number): Song {
    return {
      id: 1,
      num: 1,
      title: 'Action This Day',
      featuring: null,
      description: 'Taylor & Mercury',
      albumId: 1,
      published_at: new Date('2020-12-09T01:07:18.740Z'),
      created_at: new Date('2020-12-09T01:07:14.674Z'),
      updated_at: new Date('2020-12-09T01:08:23.203Z'),
    };
  }

  // 3. add new song to data
  addNewSong(song: Song): boolean {
    return true;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
