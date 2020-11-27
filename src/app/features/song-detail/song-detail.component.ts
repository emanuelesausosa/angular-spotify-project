import { Component, Input } from '@angular/core';
import { Song } from 'src/app/common/models/song.model';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss'],
})
export class SongDetailComponent {
  @Input() song: Song;
}
