import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HomeService]
  }));

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });

  it('should return rulings', () => {
    const service: HomeService = TestBed.get(HomeService);
    spyOn(service, 'getDataFromDB').and.callThrough();
    service.getRulings();
    expect(service.getDataFromDB).toHaveBeenCalled();
  });

  it('should save positive votes rulings', () => {
    const mock = {
      id: 1,
      title: 'Mark Zuckerberg',
      image: '',
      paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      positiveVotes: 0,
      negativeVotes: 0,
      lastVote: 1,
      totalVotes: 0,
      positiveAverage: 0,
      negativeAverage: 0,
    }

    const service: HomeService = TestBed.get(HomeService);
    spyOn(service, 'saveInDB').and.callThrough();
    service.saveVote(mock);
    expect(service.saveInDB).toHaveBeenCalled();
  });

  it('should save negative votes rulings', () => {
    const mock = {
      id: 1,
      title: 'Mark Zuckerberg',
      image: '',
      paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      positiveVotes: 0,
      negativeVotes: 0,
      lastVote: -1,
      totalVotes: 0,
      positiveAverage: 0,
      negativeAverage: 0,
    }

    const service: HomeService = TestBed.get(HomeService);
    spyOn(service, 'saveInDB').and.callThrough();
    service.saveVote(mock);
    expect(service.saveInDB).toHaveBeenCalled();
  });

  it('should save initial rulings', () => {
    const service: HomeService = TestBed.get(HomeService);

    const mock = {
      id: 1,
      title: 'Mark Zuckerberg',
      image: '',
      paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      positiveVotes: 0,
      negativeVotes: 0,
      lastVote: -1,
      totalVotes: 0,
      positiveAverage: 0,
      negativeAverage: 0,
    }
    spyOn(service.dataBase, 'getItem').and.returnValue(null);
    spyOn(service, 'saveInDB').and.callThrough();
    service.createLocalData(service.rulings)
    expect(service.saveInDB).toHaveBeenCalled();
  });
});
