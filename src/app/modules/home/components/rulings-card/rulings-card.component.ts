import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {RulingModel} from '../../../../shared/models/ruling.model';

@Component({
  selector: 'app-rulings-card',
  templateUrl: './rulings-card.component.html',
  styleUrls: ['./rulings-card.component.scss']
})
export class RulingsCardComponent implements OnInit {
  numberOfVote = 0;
  hasVoted = false;
  thanksForVoting: string;
  textButtonToVote: string;
  @Input() ruling: RulingModel;
  @Output() voteEmitter = new EventEmitter();
  @HostBinding('style.background-image') background;
  constructor() {
    this.textButtonToVote = 'Vote now';
    this.thanksForVoting = 'Thank you for voting!';
  }

  ngOnInit() {
    this.background = `url(${this.ruling.image})`;
  }

  likes(value: number) {
    this.numberOfVote = value;
  }

  vote(id) {
    if (this.hasVoted) {
      this.numberOfVote = 0;
      this.hasVoted = false;
      this.textButtonToVote = 'Vote now';
    } else {
      this.hasVoted = true;
      this.textButtonToVote = 'Vote again';
      this.voteEmitter.emit({id, lastVote: this.numberOfVote});
    }
  }
}
