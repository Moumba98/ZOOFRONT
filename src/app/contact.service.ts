import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../app/models/contact.model';

const baseUrl = 'http://localhost/zoo-arcadi-back-end/contactApi.php';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(baseUrl).pipe(
      catchError((error) => {
        console.error('Error fetching contacts:', error);
        return throwError(() => new Error('Error fetching contacts'));
      })
    );
  }

  get(id: any): Observable<Contact> {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new Error('Invalid ID provided');
    }
    return this.http.get<Contact>(`${baseUrl}/?contact_id=${numericId}`).pipe(
      catchError((error) => {
        console.error('Error fetching contact:', error);
        return throwError(() => new Error('Error fetching contact'));
      })
    );
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data).pipe(
      catchError((error) => {
        console.error('Error creating contact:', error);
        return throwError(() => new Error('Error creating contact'));
      })
    );
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/?contact_id=${id}`, data).pipe(
      catchError((error) => {
        console.error('Error updating contact:', error);
        return throwError(() => new Error('Error updating contact'));
      })
    );
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/?contact_id=${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting contact:', error);
        return throwError(() => new Error('Error deleting contact'));
      })
    );
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl).pipe(
      catchError((error) => {
        console.error('Error deleting all contacts:', error);
        return throwError(() => new Error('Error deleting all contacts'));
      })
    );
  }

  findByTitle(title: string): Observable<Contact[]> {
    const queryParam = encodeURIComponent(title);
    return this.http.get<Contact[]>(`${baseUrl}?title=${queryParam}`).pipe(
      catchError((error) => {
        console.error('Error searching contacts by title:', error);
        return throwError(() => new Error('Error searching contacts by title'));
      })
    );
  }
}
