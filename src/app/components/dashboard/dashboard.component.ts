import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Vérifie si l'utilisateur est authentifié
    const token = localStorage.getItem('adminToken');
    if (!token) {
      // Redirige vers la page de connexion si pas authentifié
      this.router.navigate(['/login']);
    }
  }
}

