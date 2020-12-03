import { Component } from '@angular/core';
import { Song } from 'src/app/common/models/song.model';

@Component({
  selector: 'new-song',
  templateUrl: './new-song.component.html',
})
export class NewSongComponent {
  song: Song = {
    num: 0,
    title: '',
    description: '',
    featuring: '',
  };

  save(): void {
    console.log(this.song);
  }

  printConsole(): void {
    console.log(this.song.title);
  }
}
