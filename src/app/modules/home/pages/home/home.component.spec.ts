import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HomeModule} from '../../home.module';
import {HomeService} from '../../home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: HomeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [HomeModule],
      providers: [{provide: HomeService, useClass: MockService}],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(HomeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save votes and return votes', () => {
    const mock = {
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
    component.rulings[0] = mock;
    spyOn(service, 'saveVote').and.callThrough();
    spyOn(service, 'getRulings').and.returnValue([mock]);
    component.vote({id: 0, votes: 0});
    fixture.detectChanges();
    expect(service.saveVote).toHaveBeenCalledWith({id: 0, votes: 0});
    expect(service.getRulings).toHaveBeenCalled();
    expect(component.rulings[0].positiveAverage).toEqual(mock.positiveAverage);
  });
});


class MockService {
  saveVote(event) {}
  getRulings() {return []; }
}
