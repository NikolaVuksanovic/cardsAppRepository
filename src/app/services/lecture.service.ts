import { Injectable } from '@angular/core';
import { data } from '../../shared/lecturesData'
@Injectable()
export class LectureService {
  lectures: any;

  constructor() {
    this.lectures = data;
  }

  getLectures() {
    return this.lectures;
  }

}
