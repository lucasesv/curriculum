import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/types';

@Component({
  selector: 'lv-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  @Input() skills: Array<Skill>;

  constructor() { }

  ngOnInit(): void {
  }

}
