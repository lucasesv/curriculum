import { Component, OnInit, Type } from '@angular/core';
import data from '../data.mock';
import * as Types from '../types';

@Component({
  selector: 'lv-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  profile: Types.Profile = data.profile;
  experiences: Array<Types.Experience> = data.experiences;
  contacts: Array<Types.Contact> = data.contact;
  education: Array<Types.Experience> = data.education;
  hardSkills: Array<Types.Skill> = data.hardSkills;
  softSkills: Array<Types.Skill> = data.softSkills;
  hobbies: Array<Types.Hobby> = data.hobbies;

  constructor() { }

  ngOnInit(): void {
  }

}
