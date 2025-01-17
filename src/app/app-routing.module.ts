import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleDetailsComponent } from './components/role-details/role-details.component';
import { VeterinaryRaportListComponent } from './components/veterinary-raport-list/veterinary-raport-list.component';
import { VeterinaryRaportDetailsComponent } from './components/veterinary-raport-details/veterinary-raport-details.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddVeterinaryRaportComponent } from './components/add-veterinary-raport/add-veterinary-raport.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { HabitatListComponent } from './components/habitat-list/habitat-list.component';
import { HabitatDetailsComponent } from './components/habitat-details/habitat-details.component';
import { AddHabitatComponent } from './components/add-habitat/add-habitat.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceDetailsComponent } from './components/race-details/race-details.component';
import { AddRaceComponent } from './components/add-race/add-race.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { NoticeListComponent } from './components/notice-list/notice-list.component';
import { NoticeDetailsComponent } from './components/notice-details/notice-details.component';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { PictureDetailsComponent } from './components/picture-details/picture-details.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import{LienServiceComponent} from './lien-service/lien-service.component';
import { LienAnimauxComponent } from './lien-animaux/lien-animaux.component';
import { LienContactComponent } from './lien-contact/lien-contact.component';
import { LienAvisComponent } from './lien-avis/lien-avis.component';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [


  // Routes publiques (avant connexion)
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lien-animaux', component: LienAnimauxComponent },
  { path: 'lien-service', component: LienServiceComponent },
  { path: 'lien-contact', component: LienContactComponent },


  // Route protégée (requiert une connexion)
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },

  // Routes protégées pour les utilisateurs
  { path: 'user', component: UserListComponent, canActivate: [authGuard] },
  { path: 'user/:user_id', component: UserDetailsComponent, canActivate: [authGuard] },
  { path: 'add-user', component: AddUserComponent, canActivate: [authGuard] },

  // Routes protégées pour les rôles
  { path: 'role', component: RoleListComponent, canActivate: [authGuard] },
  { path: 'role/:role_id', component: RoleDetailsComponent, canActivate: [authGuard] },
  { path: 'add-role', component: AddRoleComponent, canActivate: [authGuard] },

  // Routes protégées pour les rapports vétérinaires
  { path: 'Veterinary_raport', component: VeterinaryRaportListComponent, canActivate: [authGuard] },
  { path: 'Veterinary_raport/:raport_id', component: VeterinaryRaportDetailsComponent, canActivate: [authGuard] },
  { path: 'add-raport', component: AddVeterinaryRaportComponent, canActivate: [authGuard] },

  // Routes protégées pour les animaux
  { path: 'animal', component: AnimalListComponent, canActivate: [authGuard] },
  { path: 'animal/:animal_id', component: AnimalDetailsComponent, canActivate: [authGuard] },
  { path: 'add-animal', component: AddAnimalComponent, canActivate: [authGuard] },

  // Routes protégées pour les habitats
  { path: 'habitat', component: HabitatListComponent, canActivate: [authGuard] },
  { path: 'habitat/:habitat_id', component: HabitatDetailsComponent, canActivate: [authGuard] },
  { path: 'add-habitat', component: AddHabitatComponent, canActivate: [authGuard] },

  // Routes protégées pour les races
  { path: 'race', component: RaceListComponent, canActivate: [authGuard] },
  { path: 'race/:race_id', component: RaceDetailsComponent, canActivate: [authGuard] },
  { path: 'add-race', component: AddRaceComponent, canActivate: [authGuard] },

  // Routes protégées pour les services
  { path: 'service', component: ServiceListComponent, canActivate: [authGuard] },
  { path: 'service/:service_id', component: ServiceDetailsComponent, canActivate: [authGuard] },
  { path: 'add-service', component: AddServiceComponent, canActivate: [authGuard] },

  // Routes protégées pour les notices
  { path: 'lien-avis', component: NoticeListComponent, canActivate: [authGuard] },
  { path: 'notice/:notice_id', component: NoticeDetailsComponent, canActivate: [authGuard] },
  { path: 'lien-avis', component: AddNoticeComponent, canActivate: [authGuard] },

  // Routes protégées pour les images
  { path: 'picture', component: PictureListComponent, canActivate: [authGuard] },
  { path: 'picture/:picture_id', component: PictureDetailsComponent, canActivate: [authGuard] },
  { path: 'add-picture', component: AddServiceComponent, canActivate: [authGuard] },

/* { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }, // Plus de guard ici

  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'user/:user_id', component: UserDetailsComponent },
  { path: 'add-user', component: AddUserComponent },

  { path: '', redirectTo: 'role', pathMatch: 'full' },
  { path: 'role', component: RoleListComponent },
  { path: 'role/:role_id', component: RoleDetailsComponent },
  { path: 'add-role', component: AddRoleComponent },

  { path: '', redirectTo: 'Veterinary_raport', pathMatch: 'full' },
  { path: 'Veterinary_raport', component: VeterinaryRaportListComponent},
  { path: 'role/:role_id', component: VeterinaryRaportDetailsComponent },
  { path: 'add-raport', component: AddVeterinaryRaportComponent },

  { path: '', redirectTo: 'animal', pathMatch: 'full' },
  { path: 'animal', component: AnimalListComponent },
  { path: 'animal/:animal_id', component: AnimalDetailsComponent },
  { path: 'add-animal', component: AddAnimalComponent },

  { path: '', redirectTo: 'habitat', pathMatch: 'full' },
  { path: 'habitat', component: HabitatListComponent },
  { path: 'habitat/:habitat_id', component: HabitatDetailsComponent },
  { path: 'add-habitat', component: AddHabitatComponent },

  { path: '', redirectTo: 'race', pathMatch: 'full' },
  { path: 'race', component: RaceListComponent },
  { path: 'race/:race_id', component: RaceDetailsComponent },
  { path: 'add-race', component: AddRaceComponent },

  { path: '', redirectTo: 'service', pathMatch: 'full' },
  { path: 'service', component: ServiceListComponent },
  { path: 'service/:service_id', component: ServiceDetailsComponent },
  { path: 'add-service', component: AddServiceComponent },

  { path: '', redirectTo: 'notice', pathMatch: 'full' },
  { path: 'notice', component: NoticeListComponent },
  { path: 'notice/:notice_id', component: NoticeDetailsComponent },
  { path: 'add-notice', component: AddServiceComponent },

  { path: '', redirectTo: 'picture', pathMatch: 'full' },
  { path: 'picture', component: PictureListComponent },
  { path: 'picture/:picture_id', component: PictureDetailsComponent },
  { path: 'add', component: AddServiceComponent },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
