import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isAuthenticated.asObservable(); // Observable pour écouter les changements

  constructor() {}

  // Vérifie si un token existe
  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Vérifie si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // Vérifie si l'utilisateur a un rôle admin
  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'admin';
  }

  // Connexion : stocke le token et met à jour l'état
  login(token: string, role: string) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('role', role);
    this.isAuthenticated.next(true); // ⚡ Notifie que l'utilisateur est connecté
  }

  // Déconnexion : supprime les données et met à jour l'état
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    this.isAuthenticated.next(false); // ⚡ Notifie que l'utilisateur est déconnecté
  }

  // 🚀 Nouvelle méthode pour forcer la mise à jour après redirection
  checkLoginStatus() {
    const loggedIn = this.hasToken();
    this.isAuthenticated.next(loggedIn);
  }
}
