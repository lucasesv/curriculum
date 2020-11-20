import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/types';

@Component({
  selector: 'lv-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;
  
  constructor() { }

  ngOnInit(): void {
  }

}
