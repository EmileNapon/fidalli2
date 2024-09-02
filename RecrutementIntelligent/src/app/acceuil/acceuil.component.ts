import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

  showSearch = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }



}
