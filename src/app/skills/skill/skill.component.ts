import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/types';

@Component({
  selector: 'lesv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input('skill') skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
