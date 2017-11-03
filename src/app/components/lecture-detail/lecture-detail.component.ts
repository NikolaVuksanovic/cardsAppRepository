import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { data } from '../../../shared/lecturesData';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {

  private cards = [];
  private name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    let obj = data.find(el => el.name === this.name);

    if (!obj) {
      // TODO redirect to page not found
    }

    this.cards = obj.cards;

  }

}
