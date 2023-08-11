import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent {
  @Input() color: string = 'dark';
  @Input() street!: string;
  @Input() activeColor: string = 'dark';

  getLightStyles(color: string) {
    const styles: { [key: string]: string } = {}

    if (color === 'red') {
      styles['background-color'] = 'red';
    } else if (color === 'yellow') {
      styles['background-color'] = 'yellow';
    } else if (color === 'green') {
      styles['background-color'] = 'green';
    } else {
      styles['background-color'] = '#333'; // Default dark color
    }

    return styles;
  }
}
