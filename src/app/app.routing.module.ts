import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './features/album-list/album-list.component';
import { AlbumComponent } from './features/album/album.component';
import { FooComponent } from './features/foo/foo.component';
import { NewAlbumComponent } from './features/new-album/new-album.component';
import { NewSongComponent } from './features/new-song/new-song.component';
import { SongDetailComponent } from './features/song-detail/song-detail.component';
import { TestingComponent } from './features/testing-cmp/testing.component';

const routes: Routes = [
  {
    path: 'all-albums',
    component: AlbumListComponent,
  },
  {
    path: 'album',
    component: AlbumComponent,
  },
  {
    path: 'foo',
    component: FooComponent,
  },
  {
    path: 'song/:id',
    component: SongDetailComponent,
  },
  {
    path: '',
    redirectTo: '/all-albums',
    pathMatch: 'full',
  },
  {
    path: 'testing',
    component: TestingComponent,
  },
  {
    path: 'new-song',
    component: NewSongComponent,
  },
  {
    path: 'new-album',
    component: NewAlbumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
