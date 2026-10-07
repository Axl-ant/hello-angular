import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
	constructor(public interestsService: InterestsService)
	{
	  console.log(this.interestsService);
	}
}
