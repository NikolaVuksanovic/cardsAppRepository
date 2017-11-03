import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
