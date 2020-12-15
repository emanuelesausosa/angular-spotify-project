import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/common/models/album.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Song } from 'src/app/common/models/song.model';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  songDetail: any;
  closeResult: string = '';
  songDetailSelect: Song = null;
  @Input() albumModel: Album;

  constructor(private router: Router, private modal: NgbModal) {}

  viewSongDetail(song: any): void {
    this.router.navigate(['/song', song.num]);
  }

  openModal(content, song: Song) {
    this.songDetailSelect = song;
    this.modal
      .open(content, {
        ariaLabelledBy: 'song-detail-modal',
        size: 'lg',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed by: ${result}`;
        },
        (reason) => {
          this.closeResult = `Closed by: ${this.getDismissReasons(reason)}`;
        }
      )
      .catch((err) => {
        this.closeResult = `Closed by: ${err}`;
      });
  }

  private getDismissReasons(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with ${reason}`;
    }
  }
}
