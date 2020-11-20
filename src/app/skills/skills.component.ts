import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { hardSkills, softSkills } from '../data.mock';
import { Skill } from '../types';

@Component({
  selector: 'lesv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
		trigger('sectionState', [
			state('active', style({
				'opacity': 1,
				'transform': 'translateX(0)'
			})),
			transition('void => *', [
				style({
					'opacity': 0,
					'transform': 'translateX(-100px)'
				}),
				animate('0.4s ease')
			]),
			transition('* => void', [
				animate('0.4s ease'),
				style({
					'opacity': 0,
					'transform': 'translateX(100px)'
				})
			])
		])
	]
})
export class SkillsComponent implements OnInit {

  activeSkill: string = 'Profissionais';

  hardSkills: Array<Skill> = hardSkills;
  softSkills: Array<Skill> = softSkills;

  constructor() { }

  ngOnInit(): void {
  }

  showSkills(skillType: string) {
		this.activeSkill = skillType;
	}

}
