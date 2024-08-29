import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturationComponent } from './gestion-abonnements-premium/facturation/facturation.component';
import { PremiumEmployeurComponent } from './gestion-abonnements-premium/premium-employeur/premium-employeur.component';
import { PremiumCandidatComponent } from './gestion-abonnements-premium/premium-candidat/premium-candidat.component';
import { PremiumEtudiantComponent } from './gestion-abonnements-premium/premium-etudiant/premium-etudiant.component';
import { PagesEtudiantsComponent } from './module-formation-certification/pages-etudiants/pages-etudiants.component';
import { ModuleFormationCertificationComponent } from './module-formation-certification/module-formation-certification.component';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PagesCandidatComponent } from './module-formation-certification/pages-candidat/pages-candidat.component';
import { ContenuLibreComponent } from './module-formation-certification/contenu-libre/contenu-libre.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { RegistrationComponent } from './gestion-utilisateurs/inscription/inscription.component';
import { ConnexionComponent } from './gestion-utilisateurs/connexion/connexion.component';

const routes: Routes = [

  {path:'',component:AppComponent},
  {path:'facturation', component:FacturationComponent},
  {path:'premiumCandidat', component:PremiumCandidatComponent},
  {path:'premiumEmployeur', component:PremiumEmployeurComponent},
  {path:'premiumEtudiant', component:PremiumEtudiantComponent},
  {path:'acceuil', component:AcceuilComponent},

  {path:'formation',component:ModuleFormationCertificationComponent,children:[
    {path:'pages-etudiant', component:PagesEtudiantsComponent},
    {path:'pages-candidat', component:PagesCandidatComponent},
    {path:'contenu-libre', component:ContenuLibreComponent}]
  },

  {path:'usersPages',component:GestionUtilisateursComponent,children:[
    {path:'register', component:RegistrationComponent},
    {path:'login', component:ConnexionComponent},
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
