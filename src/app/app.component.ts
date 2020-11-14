import { Component } from '@angular/core';
import * as Types from './types';
import data from './data.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculo-new';

  profile: Types.Profile = data.profile;
  experiences: Array<Types.Experience> = data.experiences;
  education: Array<Types.Experience> = data.education;
  hardSkills: Array<Types.Skill> = data.hardSkills;
  softSkills: Array<Types.Skill> = data.softSkills;
  hobbies: Array<Types.Hobby> = data.hobbies;

  constructor () { }
}
