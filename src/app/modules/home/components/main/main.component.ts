import {Component, HostBinding, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @HostBinding('style.background-image') background =  this.sanitization.bypassSecurityTrustStyle('url(assets/images/pope.png)');
  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

}
