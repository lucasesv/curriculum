import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/types';

@Component({
  selector: 'lv-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  @Input() experiences: Array<Experience>;

  constructor() { }

  ngOnInit(): void {
  }

}
