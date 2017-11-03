import { Component, OnInit } from '@angular/core';

import { data } from '../../../shared/lecturesData';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements OnInit {

  private lectures = [];

  constructor() { }

  ngOnInit() {
    this.lectures = data;
    // console.log(this.lectures);
  }

}
