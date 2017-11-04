import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { data } from '../../../shared/lecturesData';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {

  private cards = [];
  private name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let obj = data.find(el => el.name === this.route.snapshot.params['name']);

    if (!obj) {
      // TODO redirect to 404
    }
    this.name = obj.name;    
    this.cards = obj.cards;

  }

}
