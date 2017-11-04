import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';
import { LectureDetailComponent } from './components/lecture-detail/lecture-detail.component';
import { Page404Component } from './components/page404/page404.component';
import { LectureService } from './services/lecture.service';

  const appRoutes: Routes = [
    { path: '', component: LectureListComponent },
    { path: 'lecture-detail/:name', component: LectureDetailComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    LectureListComponent,
    LectureDetailComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LectureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
