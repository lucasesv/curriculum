import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MailerService {

  constructor (private httpclient: HttpClient) {}

  send(name: string, from: string, message: string) {
    const email = {
      name,
      from,
      message
    };

    return this.httpclient.post('http://54.233.130.5:3000/send', email);
  }
}