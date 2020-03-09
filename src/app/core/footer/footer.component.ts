import { Component, OnInit } from '@angular/core';
import {LinkModel} from '../../shared/models/link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  items: LinkModel[];
  socialNetworkItems: LinkModel[];
  constructor() {
    this.items = [
      {text: 'Terms and Conditions', url: '/terms-and-conditions'},
      {text: 'Privacy Policy', url: '/privacy-policy'},
      {text: 'Contact Us', url: '/contact-us'}
    ];

    this.socialNetworkItems = [
      {text: '/assets/images/facebook_icon.png', url: 'www.facebook.com'},
      {text: '/assets/images/twitter_icon.png', url: 'https://twitter.com/'}
    ];

  }

  ngOnInit() {
  }

}
