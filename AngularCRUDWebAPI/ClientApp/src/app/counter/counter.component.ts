import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public heroes: Array<string> = new Array<string>();

  addHero(value: string) {
    console.log(value);
    this.heroes.push(value);
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
