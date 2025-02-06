/*import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Service pour gérer l'authentification
import { AnimalService } from '../services/animal.service'; // Service CRUD pour l'admin

interface Animal {
  id: number;
  prenom: string;
  race: string;
  image: string;
  etat: string;
}

@Component({
  selector: 'app-lien-animaux',
  templateUrl: './lien-animaux.component.html',
  styleUrls: ['./lien-animaux.component.css']
})
export class LienAnimauxComponent implements OnInit {
  animaux: Animal[] = [
    { id: 1, prenom: 'Lion', race: 'Panthera leo', image: 'assets/images/Lion.jpg', etat: 'En bonne santé' },
    { id: 2, prenom: 'Éléphant', race: 'Loxodonta', image: 'assets/images/elephant.jpg', etat: 'Besoin de soins' },
    { id: 3, prenom: 'Kasongo', race: 'Phacochère', image: 'assets/images/Imagekasongo.jpg', etat: 'En observation' },
    { id: 4, prenom: 'Girafe', race: 'Giraffa camelopardalis', image: 'assets/images/Giraf.jpg', etat: 'En bonne santé' }
  ];

  isAdmin: boolean = false;
  showModal: boolean = false;
  selectedAnimal: Animal | null = null;
  newEtat: string = '';

  constructor(private authService: AuthService, private animalService: AnimalService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin(); // Vérifier si l'utilisateur est admin
  }

  // Fonction pour afficher la modale et préparer la modification de l'état
  editEtat(animal: Animal) {
    this.selectedAnimal = animal;
    this.newEtat = animal.etat; // Précharger l'état actuel
    this.showModal = true;
  }

  // Fonction pour fermer la modale
  closeModal() {
    this.showModal = false;
    this.selectedAnimal = null;
  }

  // Fonction pour sauvegarder le nouvel état
  saveEtat() {
    if (this.selectedAnimal) {
      this.selectedAnimal.etat = this.newEtat;
      this.animalService.update(this.selectedAnimal.id, { etat: this.newEtat }).subscribe(() => {
        this.closeModal(); // Fermer la modale après la sauvegarde
      });
    }
  }
}

  import { Component, OnInit } from '@angular/core';
  import { AnimalService } from '../services/animal.service';

  interface Animal {
    id: number;
    prenom: string;
    race: string;
    image: string;
    etat: string;
  }

  @Component({
    selector: 'app-lien-animaux',
    templateUrl: './lien-animaux.component.html',
    styleUrls: ['./lien-animaux.component.css']
  })
  export class LienAnimauxComponent implements OnInit {
    animaux: Animal[] = [
      { id: 1, prenom: 'Lion', race: 'Panthera leo', image: 'assets/images/Lion.jpg', etat: 'En bonne santé' },
      { id: 2, prenom: 'Éléphant', race: 'Loxodonta', image: 'assets/images/elephant.jpg', etat: 'Besoin de soins' },
      { id: 3, prenom: 'Kasongo', race: 'Phacochère', image: 'assets/images/Imagekasongo.jpg', etat: 'En observation' },
      { id: 4, prenom: 'Girafe', race: 'Giraffa camelopardalis', image: 'assets/images/Giraf.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'ZEBRE', race: 'Giraffa camelopardalis', image: 'assets/images/zébre.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'TIGRE', race: 'Giraffa camelopardalis', image: 'assets/images/tigre1.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'SERPENT', race: 'Giraffa camelopardalis', image: 'assets/images/serpent1.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'SERPENT', race: 'Giraffa camelopardalis', image: 'assets/images/serpent2.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'SERPENT', race: 'Giraffa camelopardalis', image: 'assets/images/serpent.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'Poisson', race: 'Giraffa camelopardalis', image: 'assets/images/poisson1.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'Poisson', race: 'Giraffa camelopardalis', image: 'assets/images/poisson2.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'Poisson', race: 'Giraffa camelopardalis', image: 'assets/images/poisson3.jpg', etat: 'En bonne santé' },
    ];

    showModal: boolean = false;
    selectedAnimal: Animal | null = null;
    newEtat: string = '';

    constructor(private animalService: AnimalService) {}

    ngOnInit(): void {}

    editEtat(animal: Animal) {
      this.selectedAnimal = animal;
      this.newEtat = animal.etat;
      this.showModal = true;
    }

    closeModal() {
      this.showModal = false;
      this.selectedAnimal = null;
    }

    saveEtat() {
      if (this.selectedAnimal) {
        this.selectedAnimal.etat = this.newEtat;
        this.animalService.update(this.selectedAnimal.id, { etat: this.newEtat }).subscribe(() => {
          this.closeModal();
        });
      }
    }
  }*/

    import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { AuthService } from '../services/auth.service';

interface Animal {
  id: number;
  prenom: string;
  race: string;
  image: string;
  etat: string;
}

@Component({
  selector: 'app-lien-animaux',
  templateUrl: './lien-animaux.component.html',
  styleUrls: ['./lien-animaux.component.css']
})
export class LienAnimauxComponent implements OnInit {
  animaux: Animal[] = [
    { id: 1, prenom: 'Lion', race: 'Panthera leo', image: 'assets/images/Lion.jpg', etat: 'En bonne santé' },
    { id: 2, prenom: 'Éléphant', race: 'Loxodonta', image: 'assets/images/elephant.jpg', etat: 'Besoin de soins' },
    { id: 3, prenom: 'Kasongo', race: 'Phacochère', image: 'assets/images/Imagekasongo.jpg', etat: 'En observation' },
      { id: 4, prenom: 'Girafe', race: 'Giraffa camelopardalis', image: 'assets/images/Giraf.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'ZEBRE', race: 'Giraffa camelopardalis', image: 'assets/images/zébre.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'TIGRE', race: 'Giraffa camelopardalis', image: 'assets/images/tigre1.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'SERPENT', race: 'Giraffa camelopardalis', image: 'assets/images/serpent1.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'SERPENT', race: 'Giraffa camelopardalis', image: 'assets/images/serpent2.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'SERPENT', race: 'Giraffa camelopardalis', image: 'assets/images/serpent.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'Poisson', race: 'Giraffa camelopardalis', image: 'assets/images/poisson1.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'Poisson', race: 'Giraffa camelopardalis', image: 'assets/images/poisson2.jpg', etat: 'En bonne santé' },
      { id: 5, prenom: 'Poisson', race: 'Giraffa camelopardalis', image: 'assets/images/poisson3.jpg', etat: 'En bonne santé' },
  ];

  showModal: boolean = false;
  selectedAnimal: Animal | null = null;
  newEtat: string = '';
  isLoggedIn: boolean = false;

  constructor(private animalService: AnimalService, private authService: AuthService) {}

  ngOnInit(): void {
    // ⚡ Vérifie l'état de connexion immédiatement
    this.authService.checkLoginStatus();

    // Met à jour la connexion en temps réel
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  //editEtat(animal: Animal) {
   // if (!this.isLoggedIn) return;  // Bloquer l'accès si non connecté
   // this.selectedAnimal = animal;
   // this.newEtat = animal.etat;
   // this.showModal = true;


  //}

  editEtat(animal: Animal) {
    console.log('Modifier l’état de :', animal);
    this.selectedAnimal = animal;
    this.newEtat = animal.etat;
    this.showModal = true;
    console.log('showModal:', this.showModal);
  }

  closeModal() {
    this.showModal = false;
    this.selectedAnimal = null;
  }


  saveEtat() {
    if (this.selectedAnimal) {
      this.selectedAnimal.etat = this.newEtat;
      this.animalService.update(this.selectedAnimal.id, { etat: this.newEtat }).subscribe(() => {
        this.closeModal();
      });
    }
  }
}
