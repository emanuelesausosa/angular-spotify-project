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
import { HttpClientModule } from '@angular/common/http';
import { AlbumListComponent } from './features/album-list/album-list.component';
import { NewAlbumComponent } from './features/new-album/new-album.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    SongDetailComponent,
    FooComponent,
    TestingComponent,
    NewSongComponent,
    AlbumListComponent,
    NewAlbumComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AlbumDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
