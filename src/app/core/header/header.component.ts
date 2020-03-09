import { Component, OnInit } from '@angular/core';
import {LinkModel} from '../../shared/models/link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: LinkModel[];
  constructor() {
    this.items = [
      {text: 'Past Trials', url: '/past-trials'},
      {text: 'How it Works', url: '/how-it-works'},
      {text: 'Login / Sign Up', url: 'login'}
    ];
  }

  ngOnInit() {
  }

}
