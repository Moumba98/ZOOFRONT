import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Vérifie si l'utilisateur est authentifié en vérifiant le token
  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  // Déconnexion
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}



/*import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variable pour gérer l'état de connexion
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Vérifie l'état de connexion lors de l'initialisation du composant
    this.isLoggedIn = !!localStorage.getItem('authToken'); // Exemple avec un token dans localStorage
  }

  logout() {
    // Action de déconnexion
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirige vers la page de connexion après déconnexion
  }
}*/

