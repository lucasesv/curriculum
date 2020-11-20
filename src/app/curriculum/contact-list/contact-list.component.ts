import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/types';

@Component({
  selector: 'lv-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Array<Contact>;

  constructor() { }

  ngOnInit(): void {
  }

}
