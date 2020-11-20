import { Component, OnInit } from '@angular/core';
import data from '../data.mock';
import * as Types from '../types';

@Component({
  selector: 'lv-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  profile: Types.Profile = data.profile;
  experiences: Array<Types.Experience> = data.experiences;
  contacts: Array<Types.Contact> = data.contacts;
  education: Array<Types.Experience> = data.education;
  hardSkills: Array<Types.Skill> = data.hardSkills;
  softSkills: Array<Types.Skill>;
  hobbies: Array<Types.Hobby> = data.hobbies;

  constructor() {
    this.loadSoftSkills();
  }

  loadSoftSkills() {
    const softSkills = data.softSkills.filter(skill => {
      return (skill.name === 'Equipe')
        || (skill.name === 'Motivação')
        || (skill.name === 'Comunicação')
        || (skill.name === 'Liderança');
    });
    this.softSkills = softSkills;
  }

  ngOnInit(): void {
  }

}
