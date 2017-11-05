import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LectureService } from '../../services/lecture.service';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {

  private cards = [];
  private name: string;


  constructor(
    private lectureService: LectureService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let obj = this.lectureService.getLectureByName(this.route.snapshot.params['name']);

    if (!obj) {
      // TODO redirect to 404
    }
    this.name = obj.name;    
    this.cards = obj.cards;
    console.log(this.route.snapshot);
  }

}
