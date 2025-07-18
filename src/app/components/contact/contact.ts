// src/app/components/contact/contact.ts

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService, Contact } from '../../services/contact.services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contactService = inject(ContactService);

  form: Contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    this.contactService.send(this.form).subscribe({
      next: () => {
        alert('✅ Mensagem enviada com sucesso!');
        this.form = { name: '', email: '', message: '' };
      },
      error: (err) => {
        console.error('Erro ao enviar mensagem:', err);
        alert('Erro ao enviar mensagem');
      }
    });
  }
}
