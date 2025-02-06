import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contact?: Contact[];  // List of contacts
  currentContact: Contact = {};  // Store the current contact object
  currentIndex = -1;  // Track the selected contact index
  title = '';  // Search term for contacts

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.retrieveContacts();  // Retrieve the contacts when the component initializes
  }

  // Function to retrieve all contacts
  retrieveContacts(): void {
    this.contactService.getAll().subscribe({
      next: (data) => {
        this.contact = data;  // Assign the retrieved contacts to the component's property
        console.log(data);  // Optionally log the data
      },
      error: (e) => console.error(e)  // Handle errors
    });
  }

  // Function to refresh the list of contacts
  refreshList(): void {
    this.retrieveContacts();  // Re-fetch the contacts
    this.currentContact = {};  // Reset the selected contact
    this.currentIndex = -1;  // Reset the index
  }

  // Set the selected contact as active
  setActiveContact(contact: Contact, index: number): void {
    this.currentContact = contact;  // Set the active contact
    this.currentIndex = index;  // Set the index of the active contact
  }

  // Function to search contacts by title (or name)
  searchTitle(): void {
    this.currentContact = {};  // Reset the active contact
    this.currentIndex = -1;  // Reset the index

    this.contactService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.contact = data;  // Assign the search results to the component property
        console.log(data);  // Log the search results
      },
      error: (e) => console.error(e)  // Handle any errors
    });
  }

  // Function to delete all contacts
  removeAllContacts(): void {
    this.contactService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);  // Log the response after deleting
        this.refreshList();  // Refresh the list of contacts
      },
      error: (e) => console.error(e)  // Handle errors
    });
  }
}
