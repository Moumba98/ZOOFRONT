import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contact: Contact = {
    nom: '',
    email: '',
    sujet: '',
    message: '',
  };

  submitted = false;

  constructor(private contactService: ContactService) {}

  saveContact(): void {
    const data = {
      nom: this.contact.nom,
      email: this.contact.email,
      sujet: this.contact.sujet,
      message: this.contact.message,
    };

    this.contactService.create(data).subscribe({
      next: (res) => {
        console.log('Contact created successfully:', res);
        this.submitted = true;
      },
      error: (e) => console.error('Error creating contact:', e),
    });
  }

  newContact(): void {
    this.submitted = false;
    this.contact = {
      nom: '',
      email: '',
      sujet: '',
      message: '',
    };
  }
}
