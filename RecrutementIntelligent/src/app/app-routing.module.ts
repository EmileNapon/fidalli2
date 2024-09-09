import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturationComponent } from './gestion-abonnements-premium/facturation/facturation.component';
import { PremiumEmployeurComponent } from './gestion-abonnements-premium/premium-employeur/premium-employeur.component';
import { PremiumCandidatComponent } from './gestion-abonnements-premium/premium-candidat/premium-candidat.component';
import { PremiumEtudiantComponent } from './gestion-abonnements-premium/premium-etudiant/premium-etudiant.component';
import { PagesEtudiantsComponent } from './module-formation-certification/pages-etudiants/pages-etudiants.component';
import { ModuleFormationCertificationComponent } from './module-formation-certification/module-formation-certification.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PagesCandidatComponent } from './module-formation-certification/pages-candidat/pages-candidat.component';
import { ContenuLibreComponent } from './module-formation-certification/contenu-libre/contenu-libre.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { RegistrationComponent } from './gestion-utilisateurs/inscription/inscription.component';
import { ConnexionComponent } from './gestion-utilisateurs/connexion/connexion.component';
import { InscriptionFormationPresentielleComponent } from './module-formation-certification/inscription-formation-presentielle/inscription-formation-presentielle.component';
import { FormationPourCertificationComponent } from './module-formation-certification/formation-pour-certification/formation-pour-certification.component';
import { AcceuilFormationComponent } from './module-formation-certification/acceuil-formation/acceuil-formation.component';
import { EtablissementsComponent } from './orientations/etablissements/etablissements.component';
import { OrientationsComponent } from './orientations/orientations.component';
import { OrientationAcceuilComponent } from './orientations/orientation-acceuil/orientation-acceuil.component';
import { QizContenuLibreComponent } from './module-formation-certification/qiz-contenu-libre/quiz-contenu-libre.component';


const routes: Routes = [

  {path:'',component:AcceuilComponent},
  {path:'facturation', component:FacturationComponent},
  {path:'premiumCandidat', component:PremiumCandidatComponent},
  {path:'premiumEmployeur', component:PremiumEmployeurComponent},
  {path:'premiumEtudiant', component:PremiumEtudiantComponent},
  {path:'acceuil', component:AcceuilComponent},

  {path:'formation',component:ModuleFormationCertificationComponent,children:[
    {path:'acceuilFormation', component:AcceuilFormationComponent},
    {path:'pagesEtudiant', component:PagesEtudiantsComponent},
    {path:'pagesCandidat', component:PagesCandidatComponent},
    {path:'contenuLibre', component:ContenuLibreComponent}, 
    {path:'certification', component:FormationPourCertificationComponent},
  {path:'FormationPresentielle', component:InscriptionFormationPresentielleComponent},
  {path:'quiz', component:QizContenuLibreComponent}]
  },

  {path:'usersPages',component:GestionUtilisateursComponent,children:[
    {path:'register', component:RegistrationComponent},
    {path:'login', component:ConnexionComponent},
    ]
  },
  {path:'orientation',component:OrientationsComponent,children:[
    {path:'orientationAcceuil', component:OrientationAcceuilComponent},
    {path:'etablissement', component:EtablissementsComponent}

    ]
  },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
