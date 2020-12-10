import { Component } from '@angular/core';
import { Album } from 'src/app/common/models/album.model';
import { AlbumDataService } from 'src/app/common/services/album-data.service';

@Component({
  selector: 'new-album',
  templateUrl: './new-album.component.html',
})
export class NewAlbumComponent {
  newAlbum: Album = {
    id: 0,
    title: '',
    year: 0,
    imageUrl: '',
  };
  constructor(private albumDataService: AlbumDataService) {}

  saveNewAlbum(): void {
    if (this.validateInput(this.newAlbum)) {
      this.albumDataService.addNewAlbum(this.newAlbum).subscribe(
        (result) => {
          window.alert(
            `Album id ${result.id} ha sido creado (${result.title})`
          );
        },
        (err) => {
          window.alert(`Album no ha podido ser creado :( ${err.message}`);
        }
      );
    }
  }

  validateInput(album: Album): boolean {
    if (album.title === '') return false;
    if (!album.year) return false;
    if (album.imageUrl === '') return false;
    return true;
  }
}
