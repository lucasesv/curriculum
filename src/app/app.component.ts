import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Types from './types';
import data from './data.mock';
import { MailerService } from './mailer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {
  title = 'Lucas Vasconcelos';

	menuOpened = false;
	activeSection = 'contact';
	state = 'normal';

	contactForm: FormGroup;

	isLoading = false;

	constructor(
		private mailer: MailerService,
		private snackBar: MatSnackBar,
		private htttp: HttpClient
    ) { }

	ngOnInit() {
		this.createContactForm();
		// this.activeSection = 'contact';
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

	createContactForm() {
		this.contactForm = new FormGroup({
			'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
			'from': new FormControl(null, [Validators.required, Validators.email]),
			'message': new FormControl(null, [Validators.required, Validators.minLength(5)])
		});
	}

	getErrorMessage() {
		return 'Mensagem de erro';
	}

	onSubmitMessage() {
		if (this.contactForm.valid) {
			this.isLoading = true;
			let value = this.contactForm.value;
			this.mailer.send(value.name, value.from, value.message).subscribe(
				(response) => {
					this.showSnackBar("Mensagem enviada.", "Obrigado!", 3000);
					this.isLoading = false;
				}
			);
		}
	}

	showSnackBar(message: string, action: string, duartion: number) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}
}
