import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingsCardComponent } from './rulings-card.component';

describe('RulingsCardComponent', () => {
  let component: RulingsCardComponent;
  let fixture: ComponentFixture<RulingsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulingsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingsCardComponent);
    component = fixture.componentInstance;
    component.ruling = {
      id: 1,
      title: 'Mark Zuckerberg',
      image: '',
      paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      positiveVotes: 0,
      negativeVotes: 0,
      lastVote: 0,
      totalVotes: 0,
      positiveAverage: 0,
      negativeAverage: 0,
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set like', () => {
    component.likes(1)
    expect(component.numberOfVote).toEqual(1);
  });

  it('should vote and send emit', () => {
    spyOn(component.voteEmitter, 'emit').and.callThrough();
    component.vote(0);
    expect(component.voteEmitter.emit).toHaveBeenCalled();
  });

  it('should not vote and does not send emit', () => {
    spyOn(component.voteEmitter, 'emit').and.callThrough();
    component.hasVoted = true;
    component.vote(0);
    expect(component.voteEmitter.emit).not.toHaveBeenCalled();
  });
});
