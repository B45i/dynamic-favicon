import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  set favIcon(val: string) {
    this._document.getElementById('appFavicon')?.setAttribute('href', val);
  }

  url = '';

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {}

  onButtonClick() {
    this.favIcon = this.url;
  }
}
