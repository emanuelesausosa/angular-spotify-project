import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumComponent } from './features/album/album.component';
import { SongDetailComponent } from './features/song-detail/song-detail.component';
import { FooComponent } from './features/foo/foo.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    SongDetailComponent,
    FooComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
