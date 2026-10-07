import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

	constructor(public skillsService: SkillsService)
	{
	  console.log(this.skillsService);
	}
}
