import { Component, OnInit } from '@angular/core';

// import { data } from '../../../shared/lecturesData';
import { LectureService } from '../../services/lecture.service';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements OnInit {
  lectures:any;

  constructor(public lectureService:LectureService) {
   
  }

  ngOnInit() {
    this.lectures = this.lectureService.getLectures();
    // console.log(this.lectures);
    // console.log(this.lectures)
  }

}
