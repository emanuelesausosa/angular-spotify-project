import { Component } from '@angular/core';
import { Song } from 'src/app/common/models/song.model';
import { AlbumDataService } from 'src/app/common/services/album-data.service';

@Component({
  selector: 'new-song',
  templateUrl: './new-song.component.html',
})
export class NewSongComponent {
  song: Song = {
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

  constructor(private albumDataService: AlbumDataService) {}

  save(): void {
    if (this.validate(this.song)) {
      let result = this.albumDataService.addNewSong(this.song);
      if (result) console.log('Saved success!');
      else {
        console.log('error in save :(');
      }
    }
  }

  printConsole(): void {
    console.log(this.song.title);
  }

  validate(song: Song): boolean {
    if (song.num !== 0) return false;
    if (song.title === '') return false;
    if (song.description === '') return false;
    return true;
  }
}
