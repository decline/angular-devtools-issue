import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public hasViewContainerRef = false;

  /**
   * @TODO remove construct to make DevTools work again!
   */
  constructor(public viewContainerRef: ViewContainerRef) {
    this.hasViewContainerRef = !!viewContainerRef;
  }
}
