// src/app/services/contact.services.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contacts'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  send(contact: Contact): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }
}
