import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ModuleFormationCertificationModule } from './module-formation-certification/module-formation-certification.module';
import { RouterModule } from '@angular/router';
import { PremiumEtudiantComponent } from './gestion-abonnements-premium/premium-etudiant/premium-etudiant.component';
import { GestionUtilisateursModule } from './gestion-utilisateurs/gestion-utilisateurs.module';
import { AcceuilFormationComponent } from './module-formation-certification/acceuil-formation/acceuil-formation.component';
import { OrientationAcceuilComponent } from './orientation/orientation-acceuil/orientation-acceuil.component';
import { EtablissementsComponent } from './orientation/etablissements/etablissements.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,PremiumEtudiantComponent, AcceuilFormationComponent, OrientationAcceuilComponent, EtablissementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ModuleFormationCertificationModule, RouterModule, GestionUtilisateursModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
