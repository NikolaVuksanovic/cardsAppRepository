import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';
import { LectureDetailComponent } from './components/lecture-detail/lecture-detail.component';

const appRoutes: Routes = [
  { path: '', component: LectureListComponent },
  { path: ':name', component: LectureDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LectureListComponent,
    LectureDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
