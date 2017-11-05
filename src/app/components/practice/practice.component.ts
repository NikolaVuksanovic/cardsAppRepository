import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { LectureService } from '../../services/lecture.service';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  cardsList : any[];

  showAnswer: boolean = false;

  selectedCard = null;

  constructor(
    public lectureService: LectureService,  
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.cardsList = this.lectureService.getLectureByName(this.route.snapshot.params['name']);
    this.selectedCard = this.cardsList['cards'][0];
  }
  
  toggleCard() {
    this.showAnswer = !this.showAnswer;
  }
}
