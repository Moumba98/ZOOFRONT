import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Vérifie si un utilisateur est connecté
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Retourne vrai si un token existe
  }

  // Vérifie si l'utilisateur a un rôle admin
  isAdmin(): boolean {
    const role = localStorage.getItem('role'); // Stocke le rôle dans le localStorage
    return role === 'admin'; // Remplacez 'admin' par la valeur utilisée pour représenter un admin
  }

  // Déconnecte l'utilisateur
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role'); // Si vous stockez aussi le rôle
  }
}
