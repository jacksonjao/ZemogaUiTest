import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../home.service';
import {RulingModel} from '../../../../shared/models/ruling.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rulings: RulingModel[];
  isCloseMessage: boolean;
  constructor(private  service: HomeService) { }

  ngOnInit() {
   this.rulings = this.service.getRulings();
  }

  vote(event) {
    this.service.saveVote(event);
    this.service.getRulings().forEach((ruling, index) => {
      this.rulings[index].positiveAverage = ruling.positiveAverage;
      this.rulings[index].negativeAverage = ruling.negativeAverage;
    });
  }

}
