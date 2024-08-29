import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { ModuleFormationCertificationComponent } from './module-formation-certification.component';
import { ContenuLibreComponent } from './contenu-libre/contenu-libre.component';
import { InscriptionFormationPresentielleComponent } from './inscription-formation-presentielle/inscription-formation-presentielle.component';
import { FormationPourCertificationComponent } from './formation-pour-certification/formation-pour-certification.component';
import { CertificationComponent } from './certification/certification.component';
import { PagesEtudiantsComponent } from './pages-etudiants/pages-etudiants.component';
import { PagesCandidatComponent } from './pages-candidat/pages-candidat.component';
import { CoursComponent } from './cours/cours.component'

@NgModule({
  declarations: [
    ModuleFormationCertificationComponent,
    ContenuLibreComponent,
    InscriptionFormationPresentielleComponent,
    FormationPourCertificationComponent,
    CertificationComponent,
    PagesEtudiantsComponent,
    PagesCandidatComponent,
    CoursComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,  HttpClientModule, RouterModule, 
  ]
})
export class ModuleFormationCertificationModule { }