import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  /** O INPUT permitem que os componentes compartilhem dados. 
   * A direção do compartilhamento de dados é do componente pai para o componente filho.
   * Ou seja o quem usar o componente <app-housing-location/> irá passar pra ele um "housingLocation" */
  @Input() housingLocation!: HousingLocation;
}
