import { Component } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

	constructor (public educationService: EducationService)
	{
	  console.log(this.educationService);
	}

}
