import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { FormBuilder } from '@angular/forms';
import { HousingLocation } from '../interfaces/housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService,
    private formBuilder: FormBuilder
  ) {}

  routeParams = Number(this.route.snapshot.paramMap.get('id'));
  housingLocation: HousingLocation | any =
    this.housingService.getHousingLocationById(this.routeParams);
  applyForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
