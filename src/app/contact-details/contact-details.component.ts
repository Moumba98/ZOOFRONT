import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentContact: Contact = {
    nom: '',
    email: '',
    sujet: '',
    message: '',
  };

  message = '';

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('contact_id');
      if (id) {
        this.getContact(id);
      }
    }
  }

  getContact(id: string): void {
    this.contactService.get(id).subscribe({
      next: (data) => {
        this.currentContact = data;
      },
      error: (e) => console.error(e),
    });
  }

  updateContact(): void {
    this.message = '';

    this.contactService
      .update(this.currentContact.contact_id, this.currentContact)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This contact was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteContact(): void {
    this.contactService.delete(this.currentContact.contact_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/contacts']);
      },
      error: (e) => console.error(e),
    });
  }
}


