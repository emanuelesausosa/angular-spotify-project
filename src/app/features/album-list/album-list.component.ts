import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/common/models/album.model';
import { AlbumDataService } from 'src/app/common/services/album-data.service';
@Component({
  selector: 'album-list',
  template: `<div *ngFor="let album of albumns">
    <album-cmp [albumModel]="album"></album-cmp>
  </div>`,
})
// life cycle hooks -> OnInit, OnChanged, OnDestroy
export class AlbumListComponent implements OnInit {
  albumns: Album[];
  constructor(private albumDataService: AlbumDataService) {}
  ngOnInit(): void {
    // this.albumModel =
    this.albumDataService.getAllAlbum().subscribe((data) => {
      console.log(data);
      this.albumns = data;
    });
  }
}
