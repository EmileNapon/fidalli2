import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuth } from './service-connexion/service-connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent  {

  constructor(private authService: UserAuth){

  }
  


  getUser(id: number): void {
    this.authService.getUser(id).subscribe(user => {
      console.log('User retrieved:', user);
    }, error => {
      console.error('Error retrieving user:', error);
    });
  }

}
