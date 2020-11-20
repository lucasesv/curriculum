import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'lv-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
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
		]),
		trigger('experienceState', [
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
export class ProfilePageComponent implements OnInit {

  title = 'Lucas Vasconcelos';

	menuOpened = false;
	activeSection = 'about-me';
	state = 'normal';

	isLoading = false;

	constructor(
		private snackBar: MatSnackBar,
    ) { }

	ngOnInit() {
	}

	onOpenMenu() {
		this.menuOpened = !this.menuOpened;
	}

	onChangeSection(section) {
		this.activeSection = section;
		this.menuOpened = false;
	}
	closeContact() {
		this.activeSection = '';
	}

}
