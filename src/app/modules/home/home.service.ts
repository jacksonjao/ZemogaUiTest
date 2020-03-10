import { Injectable } from '@angular/core';
import {RulingModel} from '../../shared/models/ruling.model';

@Injectable()
export class HomeService {
  dataBase = localStorage;
  rulings: RulingModel[];
  constructor() {
    this.rulings = [{
      id: 0,
      title: 'Kanye West',
      image: 'https://static.hiphopdx.com/2019/09/190929-kanye-west-getty-800x600.jpg',
      paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      positiveVotes: 0,
      negativeVotes: 0,
      lastVote: 0,
      totalVotes: 0,
      positiveAverage: 0,
      negativeAverage: 0,
    },
      {
        id: 1,
        title: 'Mark Zuckerberg',
        image: 'https://www.marketingdirecto.com/wp-content/uploads/2018/06/Zuckerberg.jpg',
        paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        positiveVotes: 0,
        negativeVotes: 0,
        lastVote: 0,
        totalVotes: 0,
        positiveAverage: 0,
        negativeAverage: 0,
      },
      {
        id: 2,
        title: 'Cristina Fernández de Kirchner',
        image: 'https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/media/articles/43224/cristina.jpg',
        paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        positiveVotes: 0,
        negativeVotes: 0,
        lastVote: 0,
        totalVotes: 0,
        positiveAverage: 0,
        negativeAverage: 0,
      },
      {
        id: 3,
        title: 'Malala Yousafzai',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Malala_Yousafzai_2015.jpg',
        paragraph: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        positiveVotes: 0,
        negativeVotes: 0,
        lastVote: 0,
        totalVotes: 0,
        positiveAverage: 0,
        negativeAverage: 0,
      }];
    this.createLocalData(this.rulings);
  }

  createLocalData(rulings) {
    if (!this.dataBase.getItem(`votes/${0}`)) {
      rulings.forEach((ruling, index) => {
        this.saveInDB(`votes/${index}`, ruling);
      });
    }
  }

   getDataFromDB(endpoint: string) {
    return JSON.parse(this.dataBase.getItem(endpoint));
  }
   saveInDB(endpoint: string, obj: object) {
    this.dataBase.setItem(endpoint, JSON.stringify(obj));
  }

  getRulings(): RulingModel[] {
    const rulings = [];
    let counter = 0;
    while (!!this.dataBase.getItem(`votes/${counter}`)) {
      const ruling = this.getDataFromDB(`votes/${counter}`);
      rulings.push(ruling);
      counter++;
    }
    return rulings;
  }

  saveVote(obj: RulingModel) {
    const vote = this.getDataFromDB(`votes/${obj.id}`) as RulingModel;
    vote.totalVotes++;
    vote.lastVote = obj.lastVote;
    if (vote.lastVote > 0) {
      vote.positiveVotes++;
    } else {
      vote.negativeVotes--;
    }
    vote.positiveAverage = Math.abs((vote.positiveVotes * 100) / vote.totalVotes).toFixed(0);
    vote.negativeAverage = Math.abs((vote.negativeVotes * 100) / vote.totalVotes).toFixed(0);
    this.saveInDB(`votes/${vote.id}`, vote);
  }


}
