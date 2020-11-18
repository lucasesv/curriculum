import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'lesv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
