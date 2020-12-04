import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumComponent } from './features/album/album.component';
import { SongDetailComponent } from './features/song-detail/song-detail.component';
import { FooComponent } from './features/foo/foo.component';
import { AppRoutingModule } from './app.routing.module';
import { TestingComponent } from './features/testing-cmp/testing.component';
import { NewSongComponent } from './features/new-song/new-song.component';
import { FormsModule } from '@angular/forms';
import { AlbumDataService } from './common/services/album-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    SongDetailComponent,
    FooComponent,
    TestingComponent,
    NewSongComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, FormsModule],
  providers: [AlbumDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
