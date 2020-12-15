import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/common/models/song.model';

@Component({
  selector: 'song-detail-modal',
  templateUrl: './song-detail-modal.component.html',
  styleUrls: ['./song-detail-modal.component.scss'],
})
export class SongDetailModalComponent implements OnInit {
  @Input() songDetail: Song = null;
  constructor() {}

  ngOnInit(): void {}
}
