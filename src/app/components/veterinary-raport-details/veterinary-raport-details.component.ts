import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinaryRaportService } from '../../services/veterinary-raport.service';
import { Veterinary_raport } from '../../models/veterinary_raport.model';

@Component({
  selector: 'app-veterinary-raport-details',
  templateUrl: './veterinary-raport-details.component.html',
  styleUrls: ['./veterinary-raport-details.component.css']
})
export class VeterinaryRaportDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentVeterinary_raport: Veterinary_raport = {
    date: '',
    detail: '',
    user_id: 1,
    animal_id: 1
  };

  message = '';

  constructor(
    private veterinaryRaportService: VeterinaryRaportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('veterinary_report_id');
      console.log("ID récupéré :", id); // Vérification
      if (id) {
        this.getVeterinaryRaport(id);
      }
    }
  }

  getVeterinaryRaport(id: string): void {
    console.log("Requête API en cours pour l'ID :", id);
    this.veterinaryRaportService.get(id).subscribe({
      next: (data) => {
        console.log("Données reçues :", data);
        this.currentVeterinary_raport = data;
      },
      error: (e) => console.error("Erreur API :", e)
    });
  }

  updateVeterinaryRaport(): void {
    this.message = '';
    console.log("Mise à jour avec :", this.currentVeterinary_raport);
    this.veterinaryRaportService
      .update(this.currentVeterinary_raport.veterinary_report_id, this.currentVeterinary_raport)
      .subscribe({
        next: (res) => {
          console.log("Réponse mise à jour :", res);
          this.message = res.message ? res.message : 'Mise à jour réussie !';
        },
        error: (e) => console.error("Erreur mise à jour :", e)
      });
  }

  deleteVeterinaryRaport(): void {
    this.veterinaryRaportService.delete(this.currentVeterinary_raport.veterinary_report_id).subscribe({
      next: (res) => {
        console.log("Supprimé :", res);
        this.router.navigate(['/Veterinary_raport']);
      },
      error: (e) => console.error("Erreur suppression :", e)
    });
  }
}
