import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  name : string = '';
  first_name : string ='';
  role_id : any = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    const credentials = {
        username: this.username,
        name: this.name,
        first_name: this.first_name,
        role_id: this.role_id,
        password: this.password };

        console.log('Envoi des données :', credentials);
        this.http.post('http://localhost/zoo-arcadi-back-end/authApi.php', credentials)
          .subscribe(
            (response: any) => {
              console.log('Réponse reçue :', response);
              if (response.token) {
                localStorage.setItem('authToken', response.token);
                this.router.navigate(['/dashboard']);
              } else {
                alert('Erreur de connexion aa: ' + (response.message || 'Données invalides'));
              }
            },
            error => {
              console.error('Erreur lors de la requête bb :', error);
              alert('Erreur réseau ou serveur indisponible cc');
            }
          );

  }
}

