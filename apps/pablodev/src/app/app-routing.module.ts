import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './shared/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
// import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'board', 
    loadChildren: () =>
      import('@pablodev/ui').then(
        (m) => m.UiModule
      )
    // loadChildren: () => import('./features/board/board.module').then(m => m.BoardModule) 
  },
  // { path: 'drafts', loadChildren: () => import('./features/drafts/drafts.module').then(m => m.DraftsModule) },
  // { path: 'cache', loadChildren: () => import('./features/cache/cache.module').then(m => m.CacheModule) },
  // { path: 'notes', loadChildren: () => import('./features/notes/notes.module').then(m => m.NotesModule) },
  // { path: 'workout', loadChildren: () => import('./features/workout/workout.module').then(m => m.WorkoutModule) },
  // { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },

  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
