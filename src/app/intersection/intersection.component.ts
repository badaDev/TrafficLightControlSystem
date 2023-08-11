import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-intersection',
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.scss']
})
export class IntersectionComponent {
  streetB: string = "Street B";
  streetA: string = "Street A";

  trafficLights: string[] = ['dark'];
  currentCycle: number = 0;
  lightDuration: number = 10 * 1000; 
  halfCycleDuration: number = 5 * 1000; 
  activeColor: string = '--active-color: dark;';

  trafficLightSubscription: Subscription | undefined;

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.trafficLightSubscription) {
      this.trafficLightSubscription.unsubscribe();
    }
  }

  startTrafficLights() {
    this.trafficLightSubscription = interval(this.lightDuration).subscribe(() => {
      this.currentCycle++;

      if (this.currentCycle % 2 === 1) {
        this.trafficLights = ['green', 'red', 'red', 'green'];
        this.activeColor = '--active-color: green;';
      } else {
        this.trafficLights = ['red', 'green', 'green', 'red'];
        this.activeColor = '--active-color: red;';
      }

      setTimeout(() => {
        this.trafficLights = ['yellow', 'yellow', 'yellow', 'yellow'];
        this.activeColor = '--active-color: yellow;';
      }, this.halfCycleDuration);
    });
  }

  resetLights() {
    this.trafficLights = ['dark'];
    this.currentCycle = 0;
    this.trafficLights = ['green', 'red', 'red', 'green'];
    if (this.trafficLightSubscription) {
      this.trafficLightSubscription.unsubscribe();
    }
    this.startTrafficLights();
  }

}
