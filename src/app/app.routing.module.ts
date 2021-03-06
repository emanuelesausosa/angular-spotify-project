import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './features/album/album.component';
import { FooComponent } from './features/foo/foo.component';
import { SongDetailComponent } from './features/song-detail/song-detail.component';
import { TestingComponent } from './features/testing-cmp/testing.component';

const routes: Routes = [
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
    redirectTo: '/album',
    pathMatch: 'full',
  },
  {
    path: 'testing',
    component: TestingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
